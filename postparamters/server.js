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
