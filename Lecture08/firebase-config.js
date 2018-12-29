// Initialize Firebase
var config = {
    apiKey: "AIzaSyAmoU5NM0luhkPjGNW5xOmWZGFOK4MTNbw",
    authDomain: "html298-resnick.firebaseapp.com",
    databaseURL: "https://html298-resnick.firebaseio.com",
    projectId: "html298-resnick",
    storageBucket: "html298-resnick.appspot.com",
    messagingSenderId: "844309162286"
};
firebase.initializeApp(config);
db = firebase.firestore();