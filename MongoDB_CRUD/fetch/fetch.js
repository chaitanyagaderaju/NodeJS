"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var con = mongodb.MongoClient;
var fetch = express.Router().get("/all", function (req, res) {
    con.connect("mongodb://localhost:27017", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("gtms");
            db.collection("counters").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports["default"] = fetch;
