// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3-Vh8ry_RP8SZsn7n3r81z30STVfxcQE",
    authDomain: "html307-project-resnick.firebaseapp.com",
    databaseURL: "https://html307-project-resnick.firebaseio.com",
    projectId: "html307-project-resnick",
    storageBucket: "html307-project-resnick.appspot.com",
    messagingSenderId: "452092443105"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


$("#loginBtn").click(function () {
    var user = {
        email: $("#userEmail").val(),
        password: $("#userPassword").val()
    };

    console.log(user);
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert("帳號或密碼有錯");
        });
});

firebase
    .auth()
    .onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            $("#loginForm").hide();
            $("#commentEditor").show();
            $("#submitComment").show();
            $("#username").text(`Hi, ${user.email}`);
            $("#submitComment").click(function () {
                db
                    .collection("comments")
                    .add({
                        user: {
                            displayName: user.displayName,
                            email: user.email
                        },
                        content: $("#userComment").val()
                    })
                    .then(function () {
                        $("#userComment").val("");
                    });
            });
            // ...
        } else {
            // User is signed out.
            // ...
            $("#loginForm").show();
        }
    });

db.collection("comments")
    .onSnapshot(function (snapshot) {
        $("#comments").html("");
        snapshot.forEach(function (doc) {
            console.log(doc.data());
            var comment = doc.data();
            var commentHTML = `
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${comment.user.email}</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">${comment.content}</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
            `;
            var $commentElement = $(commentHTML);
            $("#comments").prepend($commentElement);
        });
    });