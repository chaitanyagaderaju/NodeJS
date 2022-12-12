<<<<<<< HEAD
"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
// set MIME Type
app.use(bodyparser.json());
// recevie data from the client as form and parser it 
app.use(bodyparser.urlencoded({ extended: false }));
// authorization code
var auth = function (req, res, next) {
    var allheaders = req.headers;
    var token = allheaders.token;
    if (token === "chaitanya") {
        next();
    }
    else {
        res.status(401).json({ auth: "auth fail" });
    }
};
// authentication and post request
app.post("/login", [auth], function (req, res) {
    if (req.body.name === "admin" && req.body.password === "admin") {
        res.status(200).json({ login: "login success" });
    }
    else {
        res.status(401).json({ login: "login fail" });
    }
    ;
});
app.listen(process.env.PORT, function () {
    console.log("server started successfully");
});
=======
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");

// create rest object
let app = express();

// enable cors policy
app.use(cors());

// set the MIME Type as json
app.use(bodyparser.json());


// parse the client data 
app.use(bodyparser.urlencoded({extended:false}));

// connecting to database
mongoose.connect("mongodb://localhost:27017/gtms");

// const Schema =  mongoose.Schema;
// const counterSchema = new Schema({
//     deptCode:Number,
//     name:String,
//     mobile:Number,
//     email:String,
//     gender:String
// });


// intialization of schema 
const counterSchema = new mongoose.Schema({
        deptCode:{
            type:Number,
            required:true,
        },
        name:String,
        mobile:Number,
        email:String,
        gender:String
});


// const Model = mongoose.model;
// const counters = Model("counters",counterSchema);



// apply above schema to database by using mongoose
const counters = mongoose.model("counters",counterSchema);


// creating rest apis
app.post("/counter",(req,res)=>{
const newRecord = new counters({
    deptCode:req.body.deptCode,
    name:req.body.name,
    mobile:req.body.mobile,
    email:req.body.email,
    gender:req.body.gender
});
newRecord.save((err,result)=>{
if(err) throw err;
else{
    res.status(200).json({insert:"success"});
}
});
});

app.get("/all",(req,res)=>{
counters.find({},(err,docs)=>{  
if(err) throw err;
else{
    res.send(docs);
}
});
});

app.put("/replace",(req,res)=>{
counters.updateOne({id:req.body.deptCode},
    {$set:{"name":req.body.name,
          "mobile":req.body.mobile,
          "email":req.body.email,
          "gender":req.body.gender }},(err,result)=>{
if(err) throw err;
else{
    res.send({message:"updated successfully"});
}
});
});

app.delete("/remove",(req,res)=>{
counters.deleteOne({deptCode:req.body.deptCode},(err,result)=>{
if(err) throw err;
else{
    res.send({message:"record deleted successfully"});
}
});
});

// listening the server with port 
app.listen(9090,()=>{
    console.log("server started successfully");
});

>>>>>>> 7b7d666 (Mongoose Crud)
