import * as express from "express";


let app:any = express();


// authorization
let auth:any = (req:any,res:any,next:any):any=>{
    let allheaders = req.headers;
    if(allheaders.token === "chaitanya"){
           next();
    }else{
       res.status(500).json({auth:"fail"});
    }
};

// authentication and get request
app.get("/login",[auth],(req:any,res:any):any=>{
if(req.query.name === "admin" && req.query.password === "admin"){
    res.status(200).json({login:"success"});
}else{
    res.status(404).json({login:"fail"});
}
});

// default request

app.get("/",(req:any,res:any):any=>{
res.sendFile("C:/Users/chaitanya g/Desktop/Apps/NodeJs/getparameters/index.html");
});

app.listen(9090,()=>{
    console.log("server successfully");
});