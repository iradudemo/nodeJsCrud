const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Server ready</h1>");
});
app.listen(3200, () => {
  console.log("server is ready!");
});
