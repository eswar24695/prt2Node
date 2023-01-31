const mongoose=require("mongoose");
const order_schema=new mongoose.Schema({
    customer_id:String,
    inventory_id:String,
    item_name:String,
    quantity:Number
})
const Order=mongoose.model("orders",order_schema);
module.exports=Order