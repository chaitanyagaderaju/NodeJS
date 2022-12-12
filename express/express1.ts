import * as express from "express";

let app:any = express();

app.get("/demo",(req:any,res:any):any=>{
res.status(200).json({message:"welcome to typescript"});
});

app.listen(9090,()=>{
console.log("server started successfully");
});