const express = require("express");
const { routes } = require("./routes");
const app = express();

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.json({ message: "Hello User" });
});

module.exports = {
  app
};
