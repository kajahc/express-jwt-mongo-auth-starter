var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config/config')
const User = require('../models/User');

/* SIGNUP a user. */
router.post('/signup', (req, res) => {
  console.log(req.body)
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              res.json({ user })
            })
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})
// login user
router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          const payload = {
            id: user.id
          }
          const token = jwt.encode(payload, config.jwtSecret)
          res.json({ token, user })
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(401)
  }
})
//returning user info
router.post('/', (req, res) => {
  console.log(req.headers)
  var decoded = jwt.decode(req.headers.authorization, config.jwtSecret);
  console.log(decoded);
  User.findById(decoded.id)
    .then(user => {
      res.json({ user })
    })
})

module.exports = router;
