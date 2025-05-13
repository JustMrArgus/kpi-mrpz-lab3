const express = require("express");
const app = express();
const port = 8000;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
