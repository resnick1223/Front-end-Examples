var express = require('express');
var loki = require('lokijs');
var bodyParser = require('body-parser');
var shortid = require('shortid');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var md5 = require('md5');
// express 設定

var app = express();


// 設定靜態資源資料夾
app.use(express.static(__dirname + '/www'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/assets', express.static(__dirname + '/assets'));
// 接收表單資料
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cookieParser());
app.use(cookieSession({
    key: "node",
    secret: shortid.generate()
}));

// 設定模板引擎
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// 初始化資料庫
var db = new loki('blog.json', {
    autosave: true,
    autosaveInterval: 5000,
    autoload: true,
    autoloadCallback: initializeCollections
});

var users, articles, categories, comments;


function initializeCollection(name) {
    var collection = db.getCollection(name);
    if (!collection)
        collection = db.addCollection(name);
    return collection;
}

function initializeCollections() {
    users = initializeCollection('users');
    articles = initializeCollection('articles');
    categories = initializeCollection('categories');
    comments = initializeCollection('comments');
}

app.get('/', function (req, res) {
    res.locals.articles = articles.data;
    res.locals.categories = categories.data;
    res.render('home');

});


app.get('/login', function (req, res) {
    if (users.data.length === 0) {
        res.redirect('/register');
    } else {
        console.log(req.path);
        res.locals.reqpath = req.path;
        res.render('registration');
    }

});

app.post('/login', function (req, res) {


    var user = users.findOne({
        name: req.body.firstname,
        password: md5(req.body.password)
    });


    if (user) {
        console.log("驗證成功, " + user.name + "登入");
        console.log("跳轉回admin");
        res.redirect('/admin');
    } else {
        console.log("驗證失敗");
        console.log("跳轉回登入頁面");
        res.redirect('/login');

    }

});

app.get('/register', function (req, res) {

    console.log(req.path);
    res.locals.reqpath = req.path;
    res.render('registration');
});


app.post('/register', function (req, res) {

    var user = {
        name: req.body.firstname,
        email: req.body.email,
        password: md5(req.body.password)
    };

    users.insert(user);
    console.log(req.body.password);
    console.log(user.password);
    res.redirect('/login');
});


function auth(req, res, next) {
    //如果驗證成功
    console.log("我是中間人" + req.path);

    //  console.log('你登入成功了嗎?' + req.session.logined);
    next();
    //不然
    //res.redirect('/register');
}


// router 定義路由

var adminRouter = express.Router();

adminRouter.use(auth);

adminRouter.get('/', function (req, res) {
    res.render('admin/dashboard.ejs');
});

adminRouter.get('/articles', function (req, res) {
    console.log("我收到了");
    res.locals.articles = articles.data;
    res.render('admin/articles/list');
});
app.locals.sitename = "Front-End 282";
adminRouter.get('/articles/add', function (req, res) {

    res.locals.categories = categories.data;
    res.render('admin/articles/add');
    res.end();
});
adminRouter.post('/articles/add', function (req, res) {
    var article = {
        shortUrl: shortid.generate(),
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        images: req.body.images
    };

    articles.insert(article);
    res.redirect('/admin/articles');
    res.end();
});
adminRouter.get('/articles/edit/:id', function (req, res) {


    var article = articles.findOne({
        shortUrl: req.params.id
    });

    if (!article) {
        res.send("查無資料");
    } else {
        res.locals.article = article;
        res.locals.categories = categories.data;

        res.render('admin/articles/edit');
    }


});
adminRouter.post('/articles/edit/:id', function (req, res) {
    var article = articles.findOne({
        shortUrl: req.params.id
    });

    article.title = req.body.title;
    article.category = req.body.category;
    article.content = req.body.content;
    article.images = req.body.images;

    articles.update(article);
    res.redirect('/admin/articles/edit/' + article.shortUrl);
});

adminRouter.get('/categories', function (req, res) {
    res.render('admin/categories/list', {
        categories: categories.data
    });
    res.end();
});
adminRouter.get('/categories/add', function (req, res) {
    res.render('admin/categories/add');
    res.end();
});
adminRouter.post('/categories/add', function (req, res) {
    var category = {
        id: shortid.generate(),
        name: req.body.name,
        description: req.body.description
    };

    categories.insert(category);

    res.redirect('/admin/categories');
    res.end();
});
adminRouter.get('/categories/edit/:id', function (req, res) {

    var category = categories.findOne({
        id: req.params.id
    });

    res.render('admin/categories/edit', {
        category: category
    });
    res.end();
});
adminRouter.post('/categories/edit/:id', function (req, res) {
    var category = categories.findOne({
        id: req.params.id
    });
    var _articles = articles.find({
        category: category.name
    });
    category.name = req.body.name;
    category.description = req.body.description;

    _articles.forEach(function (article) {
        article.category = category.name;
        articles.update(article);
    }, this);

    categories.update(category);

    res.redirect('/admin/categories');

    res.end();
});


adminRouter.get('/categories/delete/:id', function (req, res) {

    var category = categories.findOne({
        id: req.params.id
    });

    categories.remove(category);

    res.redirect('/admin/categories');
    res.end();
});

adminRouter.get('/users', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/users/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/users/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/users/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/users/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});


app.use('/admin', adminRouter);

app.listen(2345);