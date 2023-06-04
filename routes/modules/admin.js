const express=require('express')
const router=express.Router()
const adminController=require('../../controllers/admin-controller')

router.get('/sites/:id/edit',adminController.editSite)
router.get('/sites/:id',adminController.getSite)
router.put('/sites/:id',adminController.putSite)
router.delete('/sites/:id',adminController.deleteSite)
router.get('/sites',adminController.getSites)
router.post('/sites',adminController.postSite)

module.exports=router