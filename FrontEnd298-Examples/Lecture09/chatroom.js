$(function () {
    var $chats = $("#chats");
    var md = window.markdownit();
    var currentUser = null;
    db
        .collection("/chatroom/QCCiCa99uwNZolbFw3y6/chats")
        .orderBy("dateTime", "asc")
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    console.log(change.doc.data());
                    var chat = change.doc.data();
                    var chatHTML =
                        `<div class="row" id="${change.doc.id}"><div class="col-2">
                        <img width="50" src="${chat.user.photoURL}">
                        </div>
                        <div class="col-9" >
                        ${md.render(chat.content)}
                    </div></div>`;
                    var $chat = $(chatHTML);
                    $chat.addClass("border border-primary");
                    $chat.prependTo($chats);
                }
            });
        });

    $("#submit-btn").click(function () {
        var chat = {
            content: $("#chat-content").val(),
            user: {
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                uid: currentUser.uid,
            },
            dateTime: moment().format("YYYYMMDD-hh:mm:ss")

        };
        db
            .collection("/chatroom/QCCiCa99uwNZolbFw3y6/chats")
            .add(chat);
    });

    var provider = new firebase.auth.GoogleAuthProvider();
    var currentUser;
    // 監控user集合的內容
    db
        .collection("users")
        .onSnapshot(function (snapshot) {
            $("#users").html("");
            snapshot.forEach(function (doc) {
                var user = doc.data();
                var liHTML =
                    `<li>${user.displayName} ${user.email}已登入</li>`;
                var $li = $(liHTML);
                $li.appendTo($("#users"));
            });
        });


    // 登入按鈕
    $("#login-btn").click(function () {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
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

    // 登出按鈕
    $("#logout-btn").click(function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            db.doc(`users/${currentUser.uid}`).delete();
        }).catch(function (error) {
            // An error happened.
        });
    });

    // 判斷登入狀態
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            currentUser = user;
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            $("#login-btn").addClass("hidden");
            $("#logout-btn").removeClass("hidden");
            $("#chat-editor").removeClass("hidden");
            
            db
       var chat = {
                content: `${displayName} 上線囉`,
                user: {
                    displayName: "系統訊息",
                    photoURL: "data:image/png;base64,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"

                },
                dateTime: moment().format("YYYYMMDD-hh:mm:ss")
            };         .collection("/chatroom/QCCiCa99uwNZolbFw3y6/chats")
                .add(chat);

            db
                .collection("users")
                .doc(uid)
                .set({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
        } else {
            // User is signed out.
            // ...
            $("#chat-editor").addClass("hidden");
            $("#login-btn").removeClass("hidden");
            $("#logout-btn").addClass("hidden");
            var chat = {
                content: `${currentUser.displayName} 離開聊天室`,
                user: {
                    displayName: "系統訊息",
                    photoURL: "data:image/png;base64,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"
                },
                dateTime: moment().format("YYYYMMDD-hh:mm:ss")

            };
            db
                .collection("/chatroom/QCCiCa99uwNZolbFw3y6/chats")
                .add(chat);
        }
    });
});