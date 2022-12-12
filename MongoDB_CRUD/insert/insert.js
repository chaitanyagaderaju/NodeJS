"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var con = mongodb.MongoClient;
var insert = express.Router().post("/save", function (req, res) {
    con.connect("mongodb://localhost:27017", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("gtms");
            db.collection("counters").insertOne({ "deptCode": req.body.deptCode,
                "name": req.body.name,
                "mobile": req.body.mobile,
                "email": req.body.email,
                "gender": req.body.gender }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "inserted successfully" });
                }
            });
        }
    });
});
exports["default"] = insert;
