var express = require('express');
var router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');
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
router.get('/customer/profile', checkAuthentication, function (req, res) {
  if (!req.session.customer) {
    res.status(401).json({
      error: 'Unauthorized User'
    })
  } else {
    res.status(200).json({ data: req.session.customer });
  }
});

//! if we need to get a customer's profile that's not logged in, we will use this.
// router.get('/customer/profile/:id', function (req, res, next) { 
//   db.Customer.findByPk(req.params.id)
//   .then(data => {
//     res.json(data);
//   })
// });

router.get('/customer/services', checkAuthentication, (req, res,) => {
  db.Services.findAll()
    .then(data => {
      res.json(data || []);
    })
});

router.get('/all-services', (req, res,) => {
  db.Services.findAll()
    .then(data => {
      res.json(data || []);
    })
});

//register route  
router.post('/customer', (req, res) => {
  var {
    first_name,
    last_name,
    email,
    login_password,
    phone_number,
  } = req.body;
  db.Customer.findOne(
    {
      where: {
        email: req.body.email
      }
    }).then((result) => {
      if (result == null) {
        bcrypt.hash(login_password, 10, (err, hash) => {
          db.Customer.create({
            first_name,
            last_name,
            email,
            login_password: hash,
            phone_number: phone_number || false,
          }).then((result) => {
            res.send(`Welcome ${result.first_name || result.email} Please Log In`)
          });
        })
      } else {
        res.status(403).json({
          error: 'Email Address Already Exists'
        })
      }
    });
});

//!examples
// router.post('/', (req, res) => {
//   const { username, email, password } = req.body;
//   db.User.findOne( // get the user info
//     {
//       where: {
//         [Op.or]: [
//           { username: req.body.username },
//           { email: req.body.email }
//         ]
//       }
//     }).then((result) => {
//       if (result == null) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           db.User.create({
//             username,
//             email,
//             password: hash,
//           }).then((result) => {
//             res.render('index', { errorMessage: `Welcome ${result.username} Please Log In` })
//           });
//         });
//       } else {
//         res.render('index', { errorMessage: 'Username or Email Already in Database' })
//       }
//     })
// })
//


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
          res.json(Customer)
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

router.get('/logout', (req, res) => {
  req.session.destroy();
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
});

router.put('/customer', (req, res) => {
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
  }, { where: { customer_id: req.session.customer.id } },
  ).then((result) => {
    res.redirect('/customer/profile');
  });
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
    img_url,
  } = req.body;

  db.Services.create({
    nick_name,
    sq_ft,
    address,
    city,
    state,
    zipcode,
    price,
    img_url,
    customer_id: (req.session.customer.id),
  })
    .then((Service) => {
      res.json(
        Service
      ); //!customer/:id, this id is the customer in the database. 
    });

});


// router.get('/checkout', checkAuthentication, (req, res) => {
//   db.customer.findByPk()
//     .then(data => {
//       res.json(data);
//     })
// })

router.get("/admin/update", (req, res) => {
  if (req.session.customer.id === 4) {
    db.Services.findAll({
    }).then((data) => {
      res.json(data);
    })
  }
  else {
    res.status(401).json({
      error: 'Unauthorized User'
    })
  }
});

router.put('/admin/update', checkAuthentication, (req, res) => {
  const {
    nick_name,
    sq_ft,
    address,
    city,
    state,
    zipcode,
    price,
    img_url,
    customer_id,
    payment_id,
    schedule_confirm,
    reschedule,
    completed,
    id
  } = req.body.services[0];

  console.log(req.body)
  db.Services.update({
    nick_name,
    sq_ft,
    address,
    city,
    state,
    zipcode,
    price,
    img_url,
    customer_id,
    payment_id,
    schedule_confirm,
    reschedule,
    completed,
    id,
    customer_id: req.session.customer.id
  }, { where: { id: id } })

});

module.exports = router;