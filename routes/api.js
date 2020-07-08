var express = require('express');
var router = express.Router();
const db = require ('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Customer.findAll()
  .then(data=> {
    res.json(data);
  })
});

router.get('/service/:id', (req, res, ) => {
  db.Service.findByPk(req.params.id
    ).then(data => {
      res.json(data);
    })
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

router.get('/order/:id', function(req, res, next) {
  db.Orders.findByPk(req.params.id
    ).then(res => {
      res.json();
    })
  .then(data=> {
    console.log(data);
  })
});

// router.get('/2', function(req, res, next) {
//   db.Order.findAll()
//   .then(data=> {
//     res.json(data);
//   })
// });
module.exports = router;
