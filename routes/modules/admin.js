const express=require('express')
const router=express.Router()
const adminController=require('../../controllers/admin-controller')

//場域編輯頁面
router.get('/sites/:id/edit',adminController.editSite)

//場域詳細資料，包含溫室氣體、農作物、能源
router.get('/sites/:id',adminController.getSite)

//改變場域資料，包含溫室氣體、農作物、能源
router.put('/sites/:id',adminController.putSite)

//刪除場域資料，同場域的溫室氣體、農作物、能源會被刪掉
router.delete('/sites/:id',adminController.deleteSite)

//所有場域資料，只有場域
router.get('/sites',adminController.getSites)

//新增場域，包含溫室氣體、農作物、能源
router.post('/sites',adminController.postSite)

//公司資料
router.get('/companies',adminController.getCompany)

//公司編輯頁面
router.get('/companies/:id/edit',adminController.editCompany)

//改變公司資料
router.put('/companies/:id',adminController.putCompany)

module.exports=router