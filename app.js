var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/config.env'});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let testAPIRouter = require('./routes/testAPI');
let getRestaurantsRouter = require('./routes/getRestaurants');

var app = express();

// Connect to database
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Enable cors
app.use(cors());

app.use(logger('dev'));
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testapi', testAPIRouter);
app.use('/getRestaurants', getRestaurantsRouter);

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
