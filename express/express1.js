"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/demo", function (req, res) {
    res.status(200).json({ message: "welcome to typescript" });
});
app.listen(9090, function () {
    console.log("server started successfully");
});
