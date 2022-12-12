"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/login", function (req, res) {
    if (req.query.name === "admin" && req.query.password === "admin") {
        res.status(200).json({ login: "welcome to accounts" });
    }
    else {
        res.status(400).json({ login: "fail" });
    }
});
exports["default"] = accounts;
