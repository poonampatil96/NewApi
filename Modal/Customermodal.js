const mongoose=require("mongoose")

const customerschema=mongoose.Schema
({   
   
    CustName:String,
    CustMobNo:Number,
    CustAddress:String,
   
})

module.exports=mongoose.model("customer",customerschema)