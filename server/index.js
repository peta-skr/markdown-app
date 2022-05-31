const express = require("express");
const mongoose = require("mongoose");
const Text = require("./modals/Text");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/markdown-editor", () => {
  console.log("connected database");
});

app.get("/", async (req, res) => {
  try {
    const data = await Text.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const { title, text } = req.body;
  try {
    const data = await Text.create({ title, text });
    if (data) {
      res.send(data);
    } else {
      res.send("fail");
    }
  } catch (error) {
    console.log(error);
  }
});

app.put("/", async (req, res) => {
  const { id, title, text } = req.body;
  console.log(id);
  try {
    console.log("go");
    const data = await Text.findByIdAndUpdate(id, {
      $set: { title: title, text: text },
    });
    if (data) {
      console.log("suc");
      res.send(data);
    } else {
      console.log("fail");
      res.send("fail");
    }
  } catch (error) {}
});

app.listen(5000, () => {
  console.log("connection");
});
