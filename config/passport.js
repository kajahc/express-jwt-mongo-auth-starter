const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

const config = require('./config')

const User = require('../models/user')

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function () {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null
    if (user) {
      return callback(null, { id: user.id })
    } else {
      return callback(new Error('User not found'), null)
    }
  })

  passport.use(strategy)

  return {
    initialize: function () {
      return passport.initialize()
    },
    authenticate: function () {
      return passport.authenticate('jwt', { session: false })
    }
  }
}