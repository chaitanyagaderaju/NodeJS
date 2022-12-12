import * as express from "express";

let transcations:any = express.Router();

const auth1:any = (req:any,res:any,next:any):any=>{
let allHeaders:any = req.headers;
let token = allHeaders.token;
if(token === "chaitanya"){
    next();
}else{
    res.status(400).json({auth1:"fail"});
}
};

const auth2:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let cred = allHeaders.cred;
    if(cred === "chaitanya"){
        next();
    }else{
        res.status(400).json({auth2:"fail"});
    }
};

transcations.get("/login",[auth1,auth2],(req:any,res:any):any=>{
res.status(200).json({login:"welcome to transcations module"});
});

export default transcations;