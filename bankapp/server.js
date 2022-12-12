"use strict";
exports.__esModule = true;
var express = require("express");
var accounts_1 = require("./accounts");
var transcations_1 = require("./transcations");
var cards_1 = require("./cards");
var app = express();
app.use("/module1", accounts_1["default"]);
app.use("/module2", transcations_1["default"]);
app.use("/module3", cards_1["default"]);
app.listen(9090, function () {
    console.log("server started successfully");
});
