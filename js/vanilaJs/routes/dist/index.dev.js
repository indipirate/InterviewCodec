"use strict";

var express = require("express");

var router = express.Router();
router.get("/", function (req, res) {
  res.render("form", {
    title: "Registration form"
  });
});
router.post("/", function (req, res) {
  console.log(req.body);
  res.render("form", {
    title: "Registration form"
  });
});
module.exports = router;