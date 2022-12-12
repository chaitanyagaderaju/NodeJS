"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var con = mongodb.MongoClient;
var remove = express.Router()["delete"]("/", function (req, res) {
    con.connect("mongodb://localhost:27017", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("gtms");
            db.collection("counters").deleteOne({ "deptCode": req.body.deptCode }), function (err, res) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "".concat(req.body.deptCode, " record deleted successfully") });
                }
            };
        }
    });
    res.send({ message: "success" });
});
exports["default"] = remove;
