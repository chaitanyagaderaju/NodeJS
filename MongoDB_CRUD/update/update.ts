import * as express from "express";

import * as mongodb from "mongodb";

let con:any = mongodb.MongoClient;

let update:any = express.Router().put("/replace",(req:any,res:any):any=>{
con.connect("mongodb://localhost:27017",(err:any,connection:any)=>{
if(err) throw err;
else{
    let db:any = connection.db("gtms");
    db.collection("counters").updateOne({deptCode:req.body.deptCode},{$set:{"name":req.body.name,"mobile":req.body.mobile,"email":req.body.email,"gender":req.body.gender}},(err:any,result:any)=>{
        if(err) throw err;
        else{
            res.send({message:"record updated successfully"});
        }
    });


}
});
});

export default update;