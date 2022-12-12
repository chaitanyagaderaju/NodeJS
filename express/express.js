let express = require("express");


let app = express();


app.get("/",(req,res)=>{
res.status(200).json({"message":"default get request"});
});

app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"demo get request"});
 });

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"cassendra db soon"});
});
  app.listen(1306,()=>{
    console.log("server started");
});
