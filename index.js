const { application } = require("express");
const mongoose=require("mongoose");
const app = require("./app");
mongoose.connect("mongodb://localhost/api_web_tech_assignment",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to database");
})
app.listen(3005,()=>{ console.log("server running at port 3005")})
