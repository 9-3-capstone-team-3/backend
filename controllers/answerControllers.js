const express = require("express");
const answer = express.Router();
// const validateUser = require("");

const {
  getAllAnswers,
  getAnswer,
  createAnswer
} = require("../queries/answers");

answer.get("/", async (req, res) => {
  const { error, result } = await getAllAnswers();
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

answer.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getAnswer(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "answer not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

answer.post("/", async (req, res) => {
  const { error, result } = await createAnswer(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});



module.exports = answer;
