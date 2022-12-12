import * as express from "express";

let transcations:any = express.Router();

transcations.get("/",(req:any,res:any):any=>{
res.status(200).json({message:"transcations soon...!"});
});

transcations.get("/demo",(req:any,res:any):any=>{
res.status(200).json({message:"welcome to nodejs using ts"});
});


export default transcations;