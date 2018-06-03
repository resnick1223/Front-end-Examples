var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/user', function (req, res) {
    if (req.query.x != null && req.query.y != null) {
        var x = req.query.x;
        var y = req.query.y
        var data = {
            "x": x,
            "y": y,
            "result": parseInt(x) + parseInt(y)
        };
        res.render("result", data);
    } else {
        res.render("query");
    }

    res.end();
});

app.get('/add/:x/:y', function (req, res) {
    if (req.params.x != null && req.params.y != null) {
        var x = req.params.x;
        var y = req.params.y
        var data = {
            "x": x,
            "y": y,
            "result": parseInt(x) + parseInt(y)
        };
        res.render("result", data);
    } else {
        res.send("輸入錯誤");
    }

    res.end();
});

app.get('/home', function (req, res) {
    var pokemon = {
        name: "妙蛙種子",
        img: "001.png"
    };
    res.render('home', { "pokemon": pokemon });
});

app.listen(1234);