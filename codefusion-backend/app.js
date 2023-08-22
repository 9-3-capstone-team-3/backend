const express = require("express");
const cors = require("cors")

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());
//const codefusionController = require('./controllers/codefusionControllers.js')

//routes
app.get("/", (req, res) => {
    res.send("Welcome to Codefusion!")
})

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app
