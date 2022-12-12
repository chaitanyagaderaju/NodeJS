"use strict";
exports.__esModule = true;
var express = require("express");
var cards = express.Router();
cards.get("/status", function (req, res) {
    res.status(200).json({ cards: "card status updated" });
});
exports["default"] = cards;
