var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bcrypt = require('bcrypt');
const session = require('express-session');

var apiRouter = require('./routes/api');
    // customerRoute = require('./routes/api')
const { sequelize } = require('./models');
const customer = require('./models/customer');

var app = express();

// TODO PUT REACT APP HERE
app.get((req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
})
// app.set('/api/v1', apiRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', apiRouter);
app.use('/customer/:id', apiRouter);
// app.use('/order/:id', apiRouter);

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
  res.json('error');
});

module.exports = app;
