var express = require("express");
var app     = express();
var port    = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public/images"));
app.use(express.static(__dirname+"/public/javascript"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/next", function(req, res) {
  res.send("Next");
});

app.get("/tic-tac-toe", function(req, res) {
  res.render("tic-tac-toe");
});

app.listen(port, function() {
  console.log("Server connected...");
});
