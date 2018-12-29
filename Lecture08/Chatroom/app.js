// 建立聊天室的參考物件

// 有人輸入內容時 產生動畫
// 當 typing的值 發生改變的時候 秀出動畫
var chatroomRef = db.doc("/chatrooms/1");
chatroomRef.onSnapshot(function (snapshot) {
    var chatroom = snapshot.data();
    if (chatroom.typing) {
        $("#typing").removeClass("hidden");
        $("#thinking").addClass("hidden");
    } else {
        $("#typing").addClass("hidden");
        $("#thinking").removeClass("hidden");
    }
});


chatroomRef.collection("users").onSnapshot(function (snapshot) {
    snapshot.docChanges.forEach(function (change) {
        if (change.type === "added") {
            console.log(change.doc.data());
            var user = change.doc.data();
            var html = `
                <img class="circle" width="25" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/693d4621034171.562fa9bb0e181.gif" >: ${user.displayName} 上線囉
            `;

            $("<li>").html(html).appendTo($("#chats"));
        }

        if (change.type === "removed") {
            console.log(change.doc.data());
            var user = change.doc.data();
            var html = `
                <img class="circle" width="25" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/693d4621034171.562fa9bb0e181.gif" >: ${user.displayName} 滾囉
            `;

            $("<li>").html(html).appendTo($("#chats"));
        }
    });
});

// 建立聊天訊息的集合的參考
var chatsRef = db.collection("/chatrooms/1/chats");
chatsRef.onSnapshot(function (snapshot) {
    snapshot.docChanges.forEach(function (change) {
        if (change.type === "added") {
            console.log(change.doc.data());
            var chat = change.doc.data();
            var html = `
                <img class="circle" width="25" src="${chat.user.photoURL  }" alt="${chat.user.displayName}">: ${chat.message}
            `;

            $("<li>").html(html).appendTo($("#chats"));
        }
    });
});



var provider = new firebase.auth.GoogleAuthProvider();
var currentUser;
$("#login").click(function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.

        console.log(currentUser);
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});

$("#logout").click(function () {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        alert("已登出");
        console.log(currentUser.uid)
        db.doc(`/chatrooms/1/users/${currentUser.uid}`).delete().then(function () {
            console.log('刪除');
        });
        currentUser = null;
        $("#message").unbind("keydown");
        $("#message").unbind("keyup");
    }).catch(function (error) {
        // An error happened.
    });
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var defaultPhotoURL = "http://images.plurk.com/EEkp-4Mak7PDKz9HhDZS2NSO9jt.jpg";
        currentUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL || defaultPhotoURL
        };
        console.log(currentUser);
        chatroomRef.collection("users").doc(`${user.uid}`).set(currentUser);
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        var providerData = user.providerData;
        $("#login").addClass("hidden");
        $("#logout").removeClass("hidden");

        // 當有人打字的時候 修改chatroom的typing狀態
        $("#message").keydown(function (e) {
            console.log(e.keyCode);
            chatroomRef.update({
                typing: true
            });
        });

        $("#message").keyup(function (e) {
            console.log(e.keyCode);
            if (e.keyCode === 13) {

                // 把訊息 送到 firebase
                chatsRef.add({
                    message: $(this).val(),
                    user: currentUser
                });

                chatroomRef.update({
                    typing: false
                });
                $(this).val("");
            }
        });

    } else {

        $("#login").removeClass("hidden");
        $("#logout").addClass("hidden");

    }
});