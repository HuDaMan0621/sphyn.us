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

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize })

var app = express();


app.use(
  session({
    secret: 'secret', // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    store,
    cookie: {
      secure: false, // true: only accept https req’s
      maxAge: 6000000, // time in seconds
    },
  })
);
// store.sync();

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  next();
});

// app.use(session({  
//   genid: function(req) {    
// return genuuid() // use UUIDs for session IDs  
// },  
// secret: 'keyboard cat'}))

// app.use(
//   cookieSession({
//       secret: cookie_secret
//   })
// );

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

// function checkAuthentication(req, res, next) {
//   if (req.session.Customer) {
//       next();
//   } else {
//       res.redirect('/customer/:id/profile');
//   }
// }
// module.exports = checkAuthentication;
function checkAuth(req, res, next) {
  // if there is user info in the session, continue
  if (req.session.customer) {
    next();
    // or if the user is accessing the login page, same
  } else if (req.path == '/login') {
    next();
    // otherwise, redirect to login page
  } else {
    res.redirect('/customer/:id/profile');
  }
}

// run checkAuth function first, then route handler
// app.get('/', checkAuth, (req, res) => {
//   res.render('dashboard.ejs', {
//     user: req.session.user,
//   });
// });


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
