"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
//we can read params this way also
app.get("/sample/user/:name/password/:password", function (req, res) {
    if (req.params.name === "admin" && req.params.password === "admin") {
        res.send({ login: "login success" });
    }
    else {
        res.send({ login: "login fail" });
    }
});
/// or we can read request params like this also
app.get("/login", function (req, res) {
    if (req.query.name === "admin" && req.query.password === "admin") {
        res.status(201).json({ login: "login sucess" });
    }
    else {
        res.status(401).json({ login: "login fail" });
    }
});
app.listen(9080, function () {
    console.log("server started successfully");
});
