const express = require("express");
const user = express.Router();
const validateUser = require("../validations/validateUser");

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

user.post("/", async (req, res) => {
  const { error, result } = await createUser(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
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
