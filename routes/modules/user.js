const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const passport=require('passport')

//註冊
router.post('/signup', userController.signUp)

//登入
router.post('/signin',passport.authenticate('local',{session:false}), userController.signIn)
module.exports = router