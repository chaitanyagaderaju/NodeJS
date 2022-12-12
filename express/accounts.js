"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to accounts" });
});
accounts.post("/demo2", function (req, res) {
    res.status(200).json({ message: "welcome to accounts ts" });
});
exports["default"] = accounts;
