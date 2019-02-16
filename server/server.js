var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var server = express();

server.use(cors("*"));

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

//for all routes that satisfy /api/v1/cats we will use routes defined in our cats routes
server.use("/api/v1/cats", require("./routes/cats"));

module.exports = server;
