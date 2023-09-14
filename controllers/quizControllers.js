// routes/quiz.js
const express = require("express");
const quiz = express.Router();

const { getAllQuiz, getQuiz } = require("../queries/quiz.js");

// Index route - Get all quizzes
quiz.get("/", async (req, res) => {
  try {
    const { error, result } = await getAllQuiz();
    if (error) {
      res.status(500).json({ error: "Server error" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Show route - Get a quiz by ID
quiz.get("/:quiz_id", async (req, res) => {
  const { quiz_id } = req.params;
  try {
    const { error, result } = await getQuiz(quiz_id);
    if (error) {
      res.status(500).json({ error: "Server error" });
    } else if (!result) {
      res.status(404).json({ error: "Quiz not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = quiz;
