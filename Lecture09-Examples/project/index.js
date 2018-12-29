var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));



var notes = [{
        title: "title1",
        text: "text1"
    },
    {
        title: "title2",
        text: "text2"
    },
    {
        title: "title3",
        text: "text3"
    },
    {
        title: "title1",
        text: "text1"
    },
    {
        title: "title2",
        text: "text2"
    },
    {
        title: "title3",
        text: "text3"
    },
    {
        title: "title1",
        text: "text1"
    },
    {
        title: "title2",
        text: "text2"
    },
    {
        title: "title3",
        text: "text3"
    }
];

app.get('/notes', function (req, res) {

    res.locals.title = "Notes";
    res.locals.notes = notes;
    res.render('index');
    res.end();

});

app.get('/note', function (req, res) {
    res.locals.title = "Notes";

    var index = req.query.id;
    if (index >= 0 && index < notes.length) {
        res.locals.note = notes[index];
        res.locals.index = index;
        res.render('note');
    } else
        res.render('error');


});


app.post('/search', function (req, res) {
    var q = req.body.q;
    var results = [];
    notes.forEach(function (note) {
        if (note.title.indexOf(q) !== -1 || note.text.indexOf(q) !== -1)
            results.push(note);
    });
    res.locals.title = "包含" + q + "的結果，共" + results.length + "筆";
    res.locals.notes = results;
    res.render('index');
});


app.listen(3000);