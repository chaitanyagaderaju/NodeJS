import * as express from "express";

let accounts:any = express.Router();

accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to accounts"});
});

accounts.post("/demo2",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to accounts ts"});
});

export default accounts;