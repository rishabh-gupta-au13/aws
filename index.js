const express=require("express");
const app=express();

app.listen(8000,()=>{
    console.log("server Startedon port 1000")
})

app.get("/",(req,res)=>{
    res.send("Serve Started")
})