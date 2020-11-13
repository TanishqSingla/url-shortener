const express = require("express");
const mongoose = require("mongoose");
const shortUrl = require("./shortUrl");
const shortenUrl = require("./shortUrl");

const app = express();

mongoose.connect("mongodb://localhost/shortenUrl", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortenUrl", async (req, res) => {
  await shortUrl.create({ full: req.full });
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server up at port 3000")
);
