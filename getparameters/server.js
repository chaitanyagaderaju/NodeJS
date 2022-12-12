"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
// authorization
var auth = function (req, res, next) {
    var allheaders = req.headers;
    if (allheaders.token === "chaitanya") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
// authentication and get request
app.get("/login", [auth], function (req, res) {
    if (req.query.name === "admin" && req.query.password === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(404).json({ login: "fail" });
    }
});
// default request
app.get("/", function (req, res) {
    res.sendFile("C:/Users/chaitanya g/Desktop/Apps/NodeJs/getparameters/index.html");
});
app.listen(9090, function () {
    console.log("server successfully");
});
