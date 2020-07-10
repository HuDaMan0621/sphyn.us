var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');
    // customerRoute = require('./routes/api')
const { sequelize } = require('./models');
const customer = require('./models/customer');
const db = require('./models');
const session = require('express-session');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const store = new SequelizeStore({ db: db.sequelize })

var app = express();

// app.use(session({  
//   genid: function(req) {    
// return genuuid() // use UUIDs for session IDs  
// },  
// secret: 'keyboard cat'}))

// app.use(session( {
//   secret: 'secret',
//   resave: false, 
//   saveUninitialized: false,
//   cookie: {
//     //secure: true,
//     maxAge: 86400000,
//   },
//   store: store,
// }));


// app.use(checkAuthentication);

// function checkAuthentication(req, res, next) {
//   if (req.session.customer) {
//     next();
//   } else {
//     console.log('no more redirect lol')
//     // res.redirect('/login');
//   };
// };


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
// app.use('/service/:id', apiRouter);
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
