// Dependencies
const express = require("express");
const cors = require("cors");
const userController = require('./controllers/userControllers.js'); 
const quizController = require('./controllers/quizControllers.js');
const answerController = require('./controllers/answerControllers.js');
const questionController = require('./controllers/questionControllers.js')
const { func } = require("./db/dbConfig.js");
//const codefusionController = require('./controllers/codefusionControllers.js'); -- (unused controller, need to rename)
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session")
const userController = require("./controllers/userControllers.js");
const quizController = require("./controllers/quizControllers.js");
const answerController = require("./controllers/answerControllers.js");
const questionController = require("./controllers/questionControllers.js");

const { verifyUser } = require("./queries/user.js");


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
app.use(session({
  secret: 'top_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false}
}));
//intialize passport middlewarea
passport.use(
  new LocalStrategy(async function (email, password, done) {
    try {
      const user = await verifyUser(email, password);
      if (!user) {
       return done(null, false, { message: "Incorrect email or password" });
      }
       return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function (id, done) {
  try{
    const { error, result} = await getUser(id);
    if (error){
      done(error, null)
    } else {
      done(null, result);
    }
  } catch (error){
    done(error, null)
  }
});


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to CodeFusion!")
});

app.use('/users', userController);
app.use('/quiz', quizController);
app.use('/answers', answerController)
app.use('/questions', questionController)
app.use("/users", userController);
app.use("/quiz", quizController);
app.use("/answers", answerController);
app.use("/questions", questionController);

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
