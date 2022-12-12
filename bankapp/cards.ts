import * as express from "express";

let cards:any = express.Router();

cards.get("/status",(req:any,res:any):any=>{
res.status(200).json({cards:"card status updated"});
});

export default cards;
