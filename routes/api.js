var express = require('express');
var router = express.Router();
const db = require('../models');
const { route } = require('../app');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  db.Customer.findAll()
    .then(data => {
      res.json(data);
    })
});

router.get('/customer/:id', function (req, res, next) {
  db.Customer.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
});

router.get('/customer/:id/profile', function (req, res, next) {
  db.Customer.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
});

router.get('/service/:id', (req, res,) => {
  db.Service.findByPk(req.params.id) 
  .then(data => {
    res.json(data);
  })
});


//register route 
router.post('/register', (req, res) => {

  bcrypt.hash(password, 10, (err, hash) => {
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

    if (!first_name) { res.status(400).json({ error: 'first name field is required' }) }
    if (!last_name) { res.status(400).json({ error: 'last name field is required' }) }
    if (!login_name) { res.status(400).json({ error: 'login name field is required' }) }
    if (!login_password) { res.status(400).json({ error: 'password field is required' }) }
    if (!address_line_1) { res.status(400).json({ error: 'address field is required' }) }
    if (!city) { res.status(400).json({ error: 'city field is required' }) }
    if (!state) { res.status(400).json({ error: 'state field is required' }) }
    if (!zipcode) { res.status(400).json({ error: 'zip code field is required' }) }

    db.User.create({
      first_name,
      last_name,
      email,
      login_name,
      login_password: hash,
      phone_number,
      address_line_1,
      address_line_2,
      address_line_3,
      city,
      state,
      zipcode
    }).then((result) => {
      res.redirect('/login');  //after registration, redirects to login page 
    });
  });
});

// router.get('/', function(req, res, next) {
//   console.log("hello world")
//   db.Customer.findByPk(req.params.id, {
//   include: [{
//     model: db.Services,
//     through: {
//       attributes: []
//     }
//   }]
// })
//   .then(data => {
//     res.json(data);
//   })
// })

router.post('/customer/:id', (req, res) => {
  const { first_name, last_name, email, login_name, login_password, phone_number, address_line_1, address_line_2, address_line_3, city, state, zipcode } = req.body;

  if (!first_name) { res.status(400).json({ error: 'first name field is required' }) }
  if (!last_name) { res.status(400).json({ error: 'last name field is required' }) }
  if (!login_name) { res.status(400).json({ error: 'login name field is required' }) }
  if (!login_password) { res.status(400).json({ error: 'password field is required' }) }
  if (!address_line_1) { res.status(400).json({ error: 'address field is required' }) }
  if (!city) { res.status(400).json({ error: 'city field is required' }) }
  if (!state) { res.status(400).json({ error: 'state field is required' }) }
  if (!zipcode) { res.status(400).json({ error: 'zip code field is required' }) }

  db.Customer.create({
    first_name,
    last_name,
    email,
    login_name,
    login_password,
    phone_number: phone_number || false,
    address_line_1,
    address_line_2: address_line_2 || '',
    address_line_3: address_line_3 || '',
    city,
    state,
    zipcode,
  })
    .then(() => {
      res.redirect(`/customer/:id/profile`) //TODO! we don't have this route yet, will need to create it
    })
})

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
})

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

module.exports = router;
