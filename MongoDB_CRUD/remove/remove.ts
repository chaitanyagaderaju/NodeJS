import  * as express from "express";

import * as mongodb from "mongodb";

let con:any = mongodb.MongoClient;

let remove:any = express.Router().delete("/",(req:any,res:any):any=>{
    con.connect("mongodb://localhost:27017",(err:any,connection:any)=>{
      if(err) throw err;
      else{
        let db:any = connection.db("gtms");
        db.collection("counters").deleteOne({"deptCode":req.body.deptCode}),(err:any,res:any):any=>{
           if(err) throw err;
           else{
            res.send({message:`${req.body.deptCode} record deleted successfully`});
            
           }
           
        }
      }
    });  
    
   res.send({message:"success"});
});

 
export default remove;