const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = 3000; //process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "hello from the server" });
});

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
