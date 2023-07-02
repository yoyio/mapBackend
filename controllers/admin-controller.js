const{Site,Energy,Crop,Gas,Company}=require('../models')

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
    const {name,address,longitude,latitude,image,companyId,energyType,equipment,location,capacity,cropType,area,perOutput,totalOutput,emissions,reduction}=req.body
    try{
      const createdSite=await Site.create({
      name,
      address,
      longitude,
      latitude,
      image,
      companyId
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
            totalOutput,
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
    const {name,address,longitude,latitude,image,companyId,energyType,equipment,location,capacity,cropType,area,perOutput,totalOutput,emissions,reduction}=req.body
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
        image,
        companyId
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
            totalOutput
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
  },
  getCompany:(req,res,next)=>{
    Company.findAll({
      raw:true,
      nest:true
    })
    .then(company=>res.json({status:'success',company}))
    .catch(err=>next(err))
  },
  editCompany:(req,res,next)=>{
    const id=req.params.id
    Company.findByPk(id,{
      raw:true,
      nest:true
    })
    .then(company=>res.json({status:'success',company}))
    .catch(err=>next(err))
  },
  putCompany:(req,res,next)=>{
    const {name,person,tel,email,address}=req.body
    const id=req.params.id
    Company.findByPk(id)
    .then(company=>{
     return  company.update({
        name,
        person,
        tel,
        email,
        address
      })
    })
    .then(editedcompany=>res.json({status:'success',company:editedcompany}))
    .catch(err=>next(err))
  }
}

module.exports=adminController