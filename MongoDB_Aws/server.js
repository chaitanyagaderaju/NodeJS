"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var app = express();
var con = mongodb.MongoClient;
app.get("/products/:gender", function (req, res) {
    con.connect("mongodb://localhost:27017/gtms", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("gtms");
            db.collection("counters").find({ "gender": req.params.gender }).toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
var port = process.env.PORT || 9090;
app.listen(port, function () {
    console.log("server started successfully");
});
