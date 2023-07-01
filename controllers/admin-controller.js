const{Site,Energy,Crop,Gas}=require('../models')

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
    const {name,address,longitude,latitude,image,energyType,equipment,location,capacity,cropType,area,perOutput,totalOput,emissions,reduction}=req.body
    try{
      const createdSite=await Site.create({
      name,
      address,
      longitude,
      latitude,
      image
    })
    const createdEnergy=await Energy.create({
            energyType,
            equipment,
            location,
            capacity,
            siteId:createdSite.id
          })
    const createdCrop=await Crop.create({
            cropType,
            area,
            perOutput,
            totalOput,
            siteId:createdSite.id
          })

    const createdGas=await Gas.create({
          emissions,
          reduction,
          siteId:createdSite.id
    })

     return res.json({status:'success',site:createdSite,energy:createdEnergy,crop:createdCrop,gas:createdGas})
    }catch(err){
      next(err)
    }
  },
  getSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId,{
      raw:true,
      nest:true,
      include:[Energy,Crop,Gas]
    })
    .then(site=>res.json({status:'success',site}))
    .catch(err=>next(err))    
  },
  editSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId,{
      raw:true,
      nest:true,
      include:[Energy,Crop,Gas]
    })
    .then(site=>res.json({status:'success',site}))
    .catch(err=>next(err))  
  },
  putSite:(req,res,next)=>{
    const siteId=req.params.id
    const {name,address,longitude,latitude,image,energyType,equipment,location,capacity,cropType,area,perOutput,totalOput,emissions,reduction}=req.body
    Promise.all([
    Site.findByPk(siteId),
    Energy.findOne({where:{siteId:siteId}}),
    Crop.findOne({where:{siteId:siteId}}),
    Gas.findOne({where:{siteId:siteId}})
    ])
    .then(([site,energy,crop,gas])=>{
       site.update({
        name,
        address,
        longitude,
        latitude,
        image
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
       gas.update({
        emissions,
        reduction
       })
       return [site,energy,crop,gas]
    })
    .then(editedSite=>res.json({status:'success',site:editedSite}))
    .catch(err=>next(err))  
  },
  deleteSite:(req,res,next)=>{
    const siteId=req.params.id
    Site.findByPk(siteId)
    .then(site=>{
      Energy.destroy({where:{siteId:siteId}})
      Crop.destroy({where:{siteId:siteId}})
      Gas.destroy({where:{siteId:siteId}})
      return site.destroy()
    })
    .then(deletedSite=>res.json({status:'success',site:deletedSite}))
    .catch(err=>next(err))  
  }
}

module.exports=adminController