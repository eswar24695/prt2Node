const router=require("express").Router();
const Inventory=require("./models/inventory-table")
const Order=require("./models/ordertable");
const Customer=require("./models/customer");
router.post("/createOrders",async(req,res)=>{
    try{
        const createorder=await Order.create(req.body);
        res.status(200).json({
            status:"Success",
            data:createorder
        })
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.post("/createInventory",async(req,res)=>{
    try{
        const createinventory=await Inventory.create(req.body);
        res.status(200).json({
            status:"Sucess",
            data:createinventory
        })
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.post("/createCustomer",async(req,res)=>{
    try{
        const createcustomer=await Customer.create(req.body);
        res.status(200).json({
            status:"Sucess",
            data:createcustomer
        })
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.get("/orders",async(req,res)=>{
    try{
        const getorders=await Order.find({});
        res.status(200).json({
            status:"Sucess",
            data:getorders
        })

    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.get("/inventory",async(req,res)=>{
    try{
        const getinventory=await Inventory.find({});
        res.status(200).json({
            status:"Sucess",
            data:getinventory
        })

    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.get("/customerDetails",async(req,res)=>{
    try{
        const getcustomerdetails=await Customer.find({});
        res.status(200).json({
            status:"Sucess",
            data:getcustomerdetails
        })
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.get("/inventory/:inventoryType",async(req,res)=>{
    try{
        const getinventorytype=await Inventory.find({inventory_type:req.params.inventoryType});
        res.status(200).json({
            status:"Sucess",
            data:getinventorytype
        })
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.put("/:itemName/:availableQuantity",async(req,res)=>{
    try{
        const orderquantity=await Order.find({item_name:req.params.itemName},{quantity:1});
        console.log(orderquantity[0].quantity)
        const actualquantity=await Inventory.find({item_name:req.params.itemName},{available_quantity:1})
        if(actualquantity[0].available_quantity==0){
            res.status(400).json({
                status:"Failed",
                data:"Item Out of Stock"
            })
        }
        if(req.params.availableQuantity>=orderquantity[0].quantity){
            const updation=await Inventory.updateOne({item_name:req.params.itemName},{$set:{available_quantity:req.params.availableQuantity-orderquantity[0].quantity}})
            res.status(200).json({
                status:"Sucess",
                data:updation
            })
        }else{
            res.status(400).json({
                status:"Failed",
                data:"Item Out of Stock"
            })
        }  
    }
    catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})


module.exports=router;