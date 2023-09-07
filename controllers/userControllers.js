const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");

const user = express.Router();
const validateUser = require("../validations/validateUser");

const saltRounds = 10;

const {
  getAllUsers,
  getUser,
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

user.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getUser(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "user not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});
//sign up
user.post("/", validateUser, async (req, res) => {
  const userPassword = req.body.password;
  bcrypt.hash(userPassword, saltRounds, async(error, hash));

  if (error) {
    res.status(500).json({ error: "error hashing the password" });
    return;
  }
  req.body.password = hash;

  const { error, result } = await createUser(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});


user.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "server error" });
    }
    if (!user) {
      console.log(user);
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

user.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await updateUser(id, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

user.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteUser(id);
  if (error) {
    res.status(404).json("user not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = user;
