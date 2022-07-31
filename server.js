let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let passport = require('passport');
let methodOverride = require('method-override');

// Load the secrets in the .env module
require('dotenv').config();
// Connect to our database (line of code must be AFTER the above - .env)
require('./config/database');
// Configue passport
require('./config/passport');

let indexRouter = require('./routes/index');
let adminRouter = require('./routes/admin');
let staffRouter = require('./routes/staff');
let clockRouter = require('./routes/clock');
let hoursRouter = require('./routes/hoursEdit');
let scheduleRouter = require('./routes/schedule');
let searchRouter = require('./routes/search');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Custom middleware to add the logged in user
// to the locals object so that we can access
// user within EVERY template we render without
// having to pass user: req.user from the controller
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// Middleware to protect routes
let isLoggedIn = require('./config/auth');
let adminCheck = require('./config/adminSecurity')

app.use('/', indexRouter);
app.use('/admin', isLoggedIn, adminCheck ,adminRouter);
app.use('/staff', isLoggedIn, staffRouter);
app.use('/clock', isLoggedIn, clockRouter);
app.use('/hours', isLoggedIn, adminCheck , hoursRouter);
app.use('/search', isLoggedIn, adminCheck , searchRouter);
app.use('/schedule', isLoggedIn, scheduleRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
