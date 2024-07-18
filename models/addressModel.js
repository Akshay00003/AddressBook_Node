const mongoose=require('mongoose')

const AddressSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    phone:{
        type:Number,
        required:[true,"phone number is required"]
    }
})
const Address=mongoose.model("address", AddressSchema)
module.exports=Address