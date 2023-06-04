const{Site,Energy,Crop}=require('../models')

const adminController={
  getSites:(req,res,next)=>{
    Site.findAll({
      raw:true,
      nest:true
    })    
    .then(sites=> res.json({status:'success',sites}))
    .catch(err=>next(err))    
  },
  postSite:async(req,res,next)=>{
    const {name,address,energyType,equipment,location,capacity,cropType,area,perOutput,totalOput}=req.body
    try{
      const createdSite=await Site.create({
      name,
      address
    })
    const createdEnergy=await Energy.create({
            energyType,
            equipment,
            location,
            capacity,
            siteId:createdSite.id
          })
    const createdCrop=await  Crop.create({
            cropType,
            area,
            perOutput,
            totalOput,
            siteId:createdSite.id
          })

     return res.json({status:'success',createdSite,createdEnergy,createdCrop})
    }catch(err){
      next(err)
    }
  },
  getSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId,{
      raw:true,
      nest:true,
      include:[Energy,Crop]
    })
    .then(site=>res.json({status:'success',site}))
    .catch(err=>next(err))    
  },
  editSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId,{
      raw:true,
      nest:true,
      include:[Energy,Crop]
    })
    .then(site=>res.json({status:'success',site}))
    .catch(err=>next(err))  
  },
  putSite:(req,res,next)=>{
    const siteId=req.params.id
    const {name,address,energyType,equipment,location,capacity,cropType,area,perOutput,totalOput}=req.body
    Promise.all([
    Site.findByPk(siteId),
    Energy.findOne({where:{siteId:siteId}}),
    Crop.findOne({where:{siteId:siteId}})
    ])
    .then(([site,energy,crop])=>{
       site.update({
        name,
        address
       })
       energy.update({
        energyType,
            equipment,
            location,
            capacity,
       })
       crop.update({
        cropType,
            area,
            perOutput,
            totalOput
       })
       return [site,energy,crop]
    })
    .then(editedSite=>res.json({status:'success',editedSite}))
    .catch(err=>next(err))  
  },
  deleteSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId)
    .then(site=>{
      Energy.destroy({where:{siteId:siteId}})
      Crop.destroy({where:{siteId:siteId}})
      return site.destroy()
    })
    .then(deletedSite=>res.json({status:'success',deletedSite}))
    .catch(err=>next(err))  
  }
}

module.exports=adminController