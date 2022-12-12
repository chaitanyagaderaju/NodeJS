import * as express from "express";

import * as mongodb from "mongodb";

let con:any = mongodb.MongoClient;

let fetch:any = express.Router().get("/all",(req:any,res:any):any=>{
con.connect("mongodb://localhost:27017",(err:any,connection:any)=>{
if(err) throw err;
else{
    let db:any = connection.db("gtms");
    db.collection("counters").find().toArray((err:any,array:any[]):any=>{
        if(err) throw err;
        else{
            res.send(array);
        }
    });
} 
});
});


export default fetch;