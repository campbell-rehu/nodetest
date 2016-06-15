var express = require("express");
var app     = express();

app.get("/", function(req, res) {
  res.send("This is the root route");
});


app.listen(3000, function() {
  console.log("Server connected...");
});
