const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const passport=require('passport')

router.post('/signup', userController.signUp)
router.post('/signin',passport.authenticate('local',{session:false}), userController.signIn)
module.exports = router