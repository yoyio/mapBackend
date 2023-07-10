const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const userController = {
  signUp: (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) return res.json({ status: 'error', error:'Passwords do not match' })
    User.findOne({ where: { email } })
      .then(user => {
        if (user) return res.json({ status: 'error',error:'The email is already signed up'})
        return bcrypt.hash(password, 10)
      })
      .then(hash => {
        return User.create({
          name,
          email,
          password: hash
        })
      })
      .then(createdUser => res.json({ status: 'success', createdUser }))
      .catch(err => next(err))
  },
  signIn: (req, res, next) => {
    try {
      const userData=req.user.toJSON()
      delete userData.password
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.json({
        status: 'success',
        data: {
          user: userData,
          token
        }
      })
    }
    catch (err) {
      next(err)
    }
  }
}

module.exports = userController