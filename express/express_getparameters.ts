import * as express from "express";

let app:any=express();


//we can read params this way also

app.get("/sample/user/:name/password/:password",(req:any,res:any):any=>{
if(req.params.name === "admin" && req.params.password === "admin"){
    res.send({login:"login success"});
}else{
    res.send({login:"login fail"});
}
});

/// or we can read request params like this also



app.get("/login",(req:any,res:any):any=>{
if(req.query.name === "admin" && req.query.password === "admin"){
    res.status(201).json({login:"login sucess"});
}else{
    res.status(401).json({login:"login fail"});
}
});


app.listen(9080,()=>{
    console.log("server started successfully");
});
