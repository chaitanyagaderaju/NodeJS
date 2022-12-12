"use strict";
exports.__esModule = true;
var express = require("express");
var transcations = express.Router();
transcations.get("/", function (req, res) {
    res.status(200).json({ message: "transcations soon...!" });
});
transcations.get("/demo", function (req, res) {
    res.status(200).json({ message: "welcome to nodejs using ts" });
});
exports["default"] = transcations;
