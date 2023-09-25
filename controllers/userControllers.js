const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");

const user = express.Router();
const validateUser = require("../validations/validateUser");

const saltRounds = 10;

const {
  getAllUsers,
  getUser,
  getCompletedQuizzesForUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../queries/user");

user.get("/", async (req, res) => {
  const { error, result } = await getAllUsers();
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

user.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const { error, result } = await getUser(user_id);
  if (error?.code === 0) {
    res.status(404).json({ error: "user not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

user.get("/completed-quizzes/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    // Query your database to fetch the list of completed quiz IDs for the user
    const completedQuizzes = await getCompletedQuizzesForUser(user_id);
    res.status(200).json(completedQuizzes);
  } catch (error) {
    console.error("Error fetching completed quizzes:", error);
    res.status(500).json({ error: "Server error" });
  }
});
//sign up
user.post("/", validateUser, async (req, res) => {
  console.log("Received signup request", req.body);
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Validation failed' });
 }

  try {
   
    const { error, result } = await createUser(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  } catch (error) {
    // Catch general errors
    res.status(500).json({ error: "server error" });
  }
});



user.post("/login", (req, res, next) => {
  
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "server error" });
    }
    if (!user) {
    
      return res.status(401).json({ error: "authentication failed" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "server error" });
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

user.put("/:user_id", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Validation failed' });
 }
  const { user_id } = req.params;

 
  if (req.body.password) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;
    } catch (error) {
     
      return res.status(500).json({ error: "Error hashing the password" });
    }
  }


  const { error, result } = await updateUser(user_id, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});


user.delete("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const { error, result } = await deleteUser(user_id);
  if (error?.code === 'YOUR_NOT_FOUND_ERROR_CODE') {
    res.status(404).json({ error: "user not found" });
 } else if (error) {
    res.status(500).json({ error: "server error" });
 }
 
});

module.exports = user;
