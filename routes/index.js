const express=require('express')
const router=express.Router()
const admin=require('./modules/admin')
const user=require('./modules/user')

router.use('/admin',admin)
router.use('/users', user)

module.exports=router