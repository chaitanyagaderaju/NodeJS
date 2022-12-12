"use strict";
exports.__esModule = true;
var express = require("express");
var transcations = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "chaitanya") {
        next();
    }
    else {
        res.status(400).json({ auth1: "fail" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var cred = allHeaders.cred;
    if (cred === "chaitanya") {
        next();
    }
    else {
        res.status(400).json({ auth2: "fail" });
    }
};
transcations.get("/login", [auth1, auth2], function (req, res) {
    res.status(200).json({ login: "welcome to transcations module" });
});
exports["default"] = transcations;
