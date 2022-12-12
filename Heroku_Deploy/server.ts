import * as express from "express";

let app:any = express();

app.get("/demo",(req:any,res:any):any=>{
res.status(200).json({message:"welcome to Heroku Server"});
});

let port:any = process.env.PORT || 9090;

app.listen(port,()=>{
console.log("server started successfully");
});
