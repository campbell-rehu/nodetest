var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.get("/", function(req, res) {
  res.send("This is the root route");
});

app.listen(port, function() {
  console.log("Server connected...");
});
