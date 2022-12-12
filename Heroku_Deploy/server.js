"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/demo", function (req, res) {
    res.status(200).json({ message: "welcome to Heroku Server" });
});
var port = process.env.PORT || 9090;
app.listen(port, function () {
    console.log("server started successfully");
});
