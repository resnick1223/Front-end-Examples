var express = require('express');
var router = express.Router();

var admin = require("../firebase");
var db = admin.firestore();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.books = [];
    db
        .collection("books")
        .get()
        .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                res.locals.books.push(doc.data());
            });
            res.render('books');
        });
});

router.get('/:id', function (req, res, next) {
    db
        .collection("books")
        .doc(`${req.params.id}`)
        .get()
        .then(function (doc) {
            res.locals.book = doc.data();
            res.render("book");
        });

});

module.exports = router;