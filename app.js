var express = require('express');
var config = require('./config/config');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var compress = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');

var mongoose = require('mongoose');
require('./models/Posts');
mongoose.connect('mongodb://localhost/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Session
app.use(cookieParser());
app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: !true }
}));

app.use('/', index);
app.use('/users', users);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
