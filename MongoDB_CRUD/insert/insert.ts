import * as express from "express";

import * as mongodb from "mongodb";

let con:any = mongodb.MongoClient;

let insert:any = express.Router().post("/save",(req:any,res:any):any=>{
con.connect("mongodb://localhost:27017",(err:any,connection:any)=>{
if(err) throw err;
else{
    let db:any = connection.db("gtms");
    db.collection("counters").insertOne({"deptCode":req.body.deptCode,
                                          "name":req.body.name,
                                           "mobile":req.body.mobile,
                                           "email":req.body.email,
                                           "gender":req.body.gender},(err:any,result:any):any=>{
if(err) throw err;
else{
    res.send({message:"inserted successfully"});
}
    })
}
});
});

export default insert;