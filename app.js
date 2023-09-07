// Dependencies
const express = require("express");
const cors = require("cors");
const userController = require('./controllers/userControllers.js'); 
const quizController = require('./controllers/quizControllers.js');
const answerController = require('./controllers/answerControllers.js');
const questionController = require('./controllers/questionControllers.js')
const { func } = require("./db/dbConfig.js");
//const codefusionController = require('./controllers/codefusionControllers.js'); -- (unused controller, need to rename)

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parses incoming json request
// app.post('/login', 
//   passport.authenticate('local', {failureRedirect: '/login'}), 
//   function(req, res) {
//     res.redirect('/');
//   });


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to CodeFusion!")
});

app.use('/users', userController);
app.use('/quiz', quizController);
app.use('/answers', answerController)
app.use('/questions', questionController)

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
