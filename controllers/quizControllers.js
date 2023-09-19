// routes/quiz.js
const express = require("express");
const quiz = express.Router();

const { getAllQuiz, getQuiz, getQuizQuestions } = require("../queries/quiz.js");

const { levels } = require("../queries/levels.js");

quiz.get('/levels', async (req, res) => {
    try {
        await levels(db); 
        const beginnerLevels = await db.any(`SELECT quiz_id, level_number FROM question`);
        res.status(200).json(beginnerLevels);

    } catch (error) {
        console.error('Error fetching/updating levels:', error);
        res.status(500).json({ error: 'Server error'})
    }
});


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

quiz.get("/:quiz_id/questions", async (req, res) => {
  console.log(`Trying to get questions for quiz ID: ${req.params.quiz_id}`);

  const { quiz_id } = req.params;
  try {
    const { error, result } = await getQuizQuestions(quiz_id);
    console.log('Questions fetched:', result);

    if (error) {
      console.log("Error when fetching questions:", error);

      res.status(500).json({ error: "Server error" });
    } else if (!result || result.length === 0) {
      console.log("No questions found for the quiz.");

      res.status(404).json({ error: "Questions not found for the provided quiz ID" });
    } else {
      console.log("Sending questions to frontend:", result);

      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = quiz;
