require("dotenv").config();

const express = require("express");

const app = express();
var proxy=require("express-http-proxy")
app.use(proxy("https://games.awdrgyjil1234.repl.co"))
app.listen(8080)
