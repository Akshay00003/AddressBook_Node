const Address=require('../models/addressModel')

module.exports.create=async(req,res)=>{
    const {name,address,phone}=req.body.inputValues
    try{
        const adrs= new Address({name,address,phone})
        await adrs.save()
        res.json({message:"successfully created", adrs})
    }catch(err){
        res.send(err)
    }
}
module.exports.read=async(req,res)=>{
    try{
        const response=await Address.find({})
        res.json(response)
    }catch(err){
        res.send(err)
    }
}