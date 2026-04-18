const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let users = [];

let iceCreams = [];

app.get("/user", (req, res) => {
  res.render("user");
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  users.push({ name, age });

  res.send(users);
});

app.get("/icecream", (req, res) => {
  res.render("icecream");
});

app.post("/icecream", (req, res) => {
  const { name, flavor } = req.body;

  iceCreams.push({ name, flavor });

  res.send(iceCreams);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});