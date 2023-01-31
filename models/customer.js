const mongoose=require("mongoose");
const customer_schema=new mongoose.Schema({
    customer_id:String,
    customer_name:String,
    email:String
})
const Customer=mongoose.model("customers",customer_schema);
module.exports=Customer