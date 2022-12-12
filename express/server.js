"use strict";
exports.__esModule = true;
var express = require("express");
var transcations_1 = require("./transcations");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transcations_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(9090, function () {
    console.log("server started successfully");
});
