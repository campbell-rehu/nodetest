var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("Server connected...");
});
