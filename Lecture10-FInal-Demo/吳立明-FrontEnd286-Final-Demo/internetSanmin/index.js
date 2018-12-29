var express = require('express');
var app = express() ;
app.use(express.static(__dirname + '/public')) ;
app.use('/node_module',express.static(__dirname + '/node_modules')) ;
app.set('views',__dirname + '/views') ;
app.set('view engine','ejs') ;



app.get('/say-hi',function(req,res){

	res.render('index', {
		title: "hi,ejs"
	}) ;
    res.end() ;
}) ;



app.listen(3000) ;

