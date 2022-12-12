import * as express from "express";

import * as bodyparser from "body-parser";


let app:any = express();


// set MIME Type
app.use(bodyparser.json());

// recevie data from the client as form and parser it 
app.use(bodyparser.urlencoded({extended:false}));


// authorization code

let auth:any = (req:any,res:any,next:any):any=>{
let allheaders:any=req.headers;
let token:any=allheaders.token;
if(token === "chaitanya"){
    next();
}else{
    res.status(401).json({auth:"auth fail"});
}
};

// authentication and post request
app.post("/login",[auth],(req:any,res:any):any=>{
if(req.body.name === "admin" && req.body.password === "admin"){
    res.status(200).json({login:"login success"});
}else{
    res.status(401).json({login:"login fail"});
};
});

//app.listen(process.env.PORT,()=>{
app.listen(9090,()=>{ 
console.log("server started successfully");
});
