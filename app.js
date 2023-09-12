// Dependencies
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session")
const userController = require("./controllers/userControllers.js");
const quizController = require("./controllers/quizControllers.js");
const answerController = require("./controllers/answerControllers.js");
const questionController = require("./controllers/questionControllers.js");
const introquestionController = require("./controllers/introQuestionControllers.js")
const userProfileController = require("./controllers/userProfileController.js");


const { verifyUser } = require("./queries/user.js");


// Configuration
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',  // Replace this with your frontend's address
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // This allows the session cookie to be sent back and forth
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // parses incoming json request
app.use(session({
  secret: 'top_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false}
}));
//intialize passport middlewarea
passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },async function (email, password, done) {
    console.log(email, password);//remove this after debugging
    try {
      const user = await verifyUser(email, password);
      console.log(user);//remove this after debugging
      if (!user) {
       return done(null, false, { message: "authentication failed" });
      }
       return done(null, user);
    } catch (error) {
      console.log(error);//remove this after debugging
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.user_id);
});
passport.deserializeUser(async function (user_id, done) {
  try{
    const { error, result} = await getUser(user_id);
    console.log(result);//remove this after debugging
    if (error){
      done(error, null)
    } else {
      console.log(result);//remove this after debugging
      done(null, result);
    }
  } catch (error){
    done(error, null)
  }
});



app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to CodeFusion!");

});

// Use the userController for user-related routes
app.use("/users", userController);

// Add the profile endpoint to the userProfileController
app.use("/users/profile/:user_id", userProfileController); // Note the change in the URL here: `/users/profile/:user_id`

app.use("/quiz", quizController);
app.use("/answers", answerController);
app.use("/questions", questionController);
app.use("/introquestions", introquestionController);

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
