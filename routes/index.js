var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  // console.log(req.body)
  return models.User.create({
    email: req.body.email,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }).then(user => {
    res.redirect('/')
  })
})
module.exports = router;
