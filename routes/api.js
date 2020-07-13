var express = require('express');
var router = express.Router();
const db = require('../models');

const bcrypt = require('bcrypt');
const checkAuthentication = require('../auth');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.Customer.findAll()
    .then(data => {
      res.json(data);
    })
});

//customer profile route 
router.get('/customer/profile', function (req, res) {
  console.log('this is req.session.customer', req.session.customer)
  if ( !req.session.customer){  
    res.status(401).json({
      error: 'Unauthorized User'
    })
  } else {
      res.json({ data: req.session.customer});
  }
});

//! if we need to get a customer's profile that's not logged in, we will use this.
// router.get('/customer/profile/:id', function (req, res, next) { 
//   db.Customer.findByPk(req.params.id)
//   .then(data => {
//     res.json(data);
//   })
// });

router.get('/service', checkAuthentication, (req, res,) => {
  db.Service.findByPk(req.session.customer.id)
    .then(data => {
      res.json(data);
    })
});

//register route  
router.post('/customer', (req, res) => {
  var {
    first_name,
    last_name,
    email,
    // login_name,
    login_password,
    phone_number,
    // address_line_1,
    // address_line_2,
    // address_line_3,
    // city,
    // state,
    // zipcode
  } = req.body;
  bcrypt.hash(login_password, 10, (err, hash) => {
    // if (!first_name) { res.status(400).json({ error: 'first name field is required' }) }
    // if (!last_name) { res.status(400).json({ error: 'last name field is required' }) }
    // // if (!login_name) { res.status(400).json({ error: 'login name field is required' }) }
    // if (!login_password) { res.status(400).json({ error: 'password field is required' }) }
    // if (!address_line_1) { res.status(400).json({ error: 'address field is required' }) }
    // if (!city) { res.status(400).json({ error: 'city field is required' }) }
    // if (!state) { res.status(400).json({ error: 'state field is required' }) }
    // if (!zipcode) { res.status(400).json({ error: 'zip code field is required' }) }
    db.Customer.create({
      first_name,
      last_name,
      email,
      // login_name,
      login_password: hash,
      phone_number: phone_number || false,
      // address_line_1,
      // address_line_2: address_line_2 || '',
      // address_line_3: address_line_3 || '',
      // city,
      // state,
      // zipcode
    })
    // .then((result) => {
    //   delete db.Customer.login_password; //! we commented these 2 lines to test the login route
    //   req.session.db.Customer = Customer; //!
    // res.redirect('/login');  //after registration, redirects to login page 
    // });
  });
});

router.get('/login', function (req, res, next) {
  db.Customer.findAll()
    .then(data => {
      res.json(data);
    })
});

//login route
router.post('/login', (req, res) => {
  const { email, login_password } = req.body;
  db.Customer.findOne({ where: { email: email } })
    .then(Customer => {
      bcrypt.compare(login_password, Customer.login_password, (err, match) => {
        if (match) {
          req.session.customer = Customer;
          console.log(req.session);
          res.json(Customer)
          // res.redirect(`/customer/${Customer.id}/profile`);
        }
        else {
          res.send('Incorrect password.')
        }
      })
    })
    .catch(() => {
      res.send('Username not found. Please return to previous page and try again.')
    });
});
//! redirect with json ?

// router.get('/logout', function (req, res) {
//   req.logout();
//   res.status(200).json({ 
//     status: 'Bye Bye'
//   });
//   res.clearCookie('duoshuo_token');
//   req.session.destroy();
//   res.redirect('/');
// });


// router.post('/customer/:id', (req, res) => {
//   const { first_name, last_name, email, login_name, login_password, phone_number, address_line_1, address_line_2, address_line_3, city, state, zipcode } = req.body;
//   if (!first_name) { res.status(400).json({ error: 'first name field is required' }) }
//   if (!last_name) { res.status(400).json({ error: 'last name field is required' }) }
//   if (!login_name) { res.status(400).json({ error: 'login name field is required' }) }
//   if (!login_password) { res.status(400).json({ error: 'password field is required' }) }
//   if (!address_line_1) { res.status(400).json({ error: 'address field is required' }) }
//   if (!city) { res.status(400).json({ error: 'city field is required' }) }
//   if (!state) { res.status(400).json({ error: 'state field is required' }) }
//   if (!zipcode) { res.status(400).json({ error: 'zip code field is required' }) }
//   db.Customer.create({
//     first_name,
//     last_name,
//     email,
//     login_name,
//     login_password,
//     phone_number: phone_number || false,
//     address_line_1,
//     address_line_2: address_line_2 || '',
//     address_line_3: address_line_3 || '',
//     city,
//     state,
//     zipcode,
//   })
//     .then(() => {
//       res.redirect(`/login`) //TODO! we don't have this route yet, will need to create it
//     })
// })
router.delete('/customer/:id', (req, res) => {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(number => {
      if (number > 0) {
        res.status(204).json({});
      } else {
        res.json({ error: `could not find customer with id: ${req.params.id}` })
      }
    })
});

router.put('/customer/:id', (req, res) => {
  console.log('THIS IS THE PUT ROUTE!!!! ')
  const {
    first_name,
    last_name,
    email,
    login_name,
    login_password,
    phone_number,
    address_line_1,
    address_line_2,
    address_line_3,
    city,
    state,
    zipcode
  } = req.body;
  //we find the customer id
  db.Customer.update({
    first_name,
    last_name,
    email,
    login_name,
    login_password,
    phone_number,
    address_line_1,
    address_line_2,
    address_line_3,
    city,
    state,
    zipcode
  }, { where: { id: req.params.id } },
  ).then((result) => {
    console.log(result)
    res.redirect('/');
  });
});
//   db.contact.update
//     .then(customer => {
//       first_name,
//         last_name,
//         email,
//         login_name,  //TODO search db to see if db is available
//         login_password,  //TODO check to see if the password is matching
//         phone_number,
//         address_line_1,
//         address_line_2,
//         address_line_3,
//         city,
//         state,
//         zipcode
//     }
// )},)
// if (!first_name) { res.status(400).json({ error: 'first name field is required' }) }
// if (!last_name) { res.status(400).json({ error: 'last name field is required' }) }
// if (!login_name) { res.status(400).json({ error: 'login name field is required' }) }
// if (!login_password) { res.status(400).json({ error: 'password field is required' }) }
// if (!address_line_1) { res.status(400).json({ error: 'address field is required' }) }
// if (!city) { res.status(400).json({ error: 'city field is required' }) }
// if (!state) { res.status(400).json({ error: 'state field is required' }) }
// if (!zipcode) { res.status(400).json({ error: 'zip code field is required' }) }
//  res.json(user)

router.get('/order/:id', function (req, res, next) {
  db.Orders.findByPk(req.params.id
  ).then(res => {
    res.json();
  })
    .then(data => {
      console.log(data);
    })
});


router.post('/booking', checkAuthentication, (req, res) => {
  const {
    nick_name,
    sq_ft,
    address,
    city,
    state,
    zipcode,
    price,
  } = req.body;
  
  db.Services.create({
    nick_name,
    sq_ft,
    address,
    city,
    state,
    zipcode,
    price
  })
  // const { id } = req.params;
  // db.CustomerOrder.findOne({ where: { customer_id : id}})
    .then((Service) => {
      res.json(
        Service
      ); //!customer/:id, this id is the customer in the database. 
    });
});


module.exports = router;