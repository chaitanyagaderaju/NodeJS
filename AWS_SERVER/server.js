const express = require("express");

const app = express();

app.get("/demo1",(req,res)=>{
res.send({message:"Welcome to demo1 request"});
});

app.get("/demo2",(req,res)=>{
    res.send({message:"Welcome to demo2 request"});
    });

let port = process.env.PORT || 9090;

app.listen(port,()=>{
console.log("server the started successfully");
});