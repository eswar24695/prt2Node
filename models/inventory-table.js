const mongoose=require("mongoose");
const inventory_schema=new mongoose.Schema({
    inventory_id:String,
    inventory_type:String,
    item_name:String,
    available_quantity:Number
})
const Inventory=mongoose.model("products",inventory_schema);
module.exports=Inventory