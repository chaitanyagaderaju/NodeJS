import * as express from "express";

let accounts = express.Router();

accounts.get("/login",(req:any,res:any):any=>{
if(req.query.name === "admin" && req.query.password === "admin"){
    res.status(200).json({login:"welcome to accounts"});
}
else{
    res.status(400).json({login:"fail"});
}
});

export default accounts;