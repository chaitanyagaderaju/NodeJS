import * as express from "express";
import * as mongodb from "mongodb";

let app:any=express();

let con:any = mongodb.MongoClient;


app.get("/products/:gender",(req:any,res:any):any=>{
    con.connect("mongodb://localhost:27017/gtms",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
          let db:any = connection.db("gtms");
          db.collection("counters").find({"gender":req.params.gender}).toArray((err:any,array:any):any=>{
          if(err) throw err;
          else{
            res.send(array);
          }
          });

        } 
    });
});

let port:any = process.env.PORT || 9090;
app.listen(port,()=>{
   console.log("server started successfully"); 
});