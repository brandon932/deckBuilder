// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

// *** mongoose *** //
mongoose.connect("mongodb://localhost/mean-auth");

// *** routes *** //
var routes = require('./routes/index.js');
var user = require('./routes/userAPI.js');
var decks = require('./routes/decks.js');


// *** express instance *** //
var app = express();


// *** view engine *** //
// app.engine('html', ejs.renderFile);
// app.set('view engine', 'html');

app.get('/', function(req,res,next){
  res.sendFile(path.join(__dirname, "../client/html", 'index.html'));
});

// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));

// *** main routes *** //

app.use('/', routes);
app.use('/auth', user);
app.use('/api', decks);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({status: 'Error!'});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({status: 'Error!'});
});


module.exports = app;
