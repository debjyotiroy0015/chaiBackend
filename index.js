const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/youtube", (req, res) => {
  res.send("Open Youtube");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
