const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = 3000; //process.env.PORT;

console.log(port);
