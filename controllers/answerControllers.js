const express = require("express");
const answer = express.Router();

const {
  getAllAnswers,
  getAnswer,
  getCorrectAnswerForQuestion,
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

answer.post('/questions/:question_id/validate', async (req, res) => {
  const { question_id } = req.params;
  const userAnswer = req.body.answer;
  console.log(`Received answer for question ${question_id}: ${userAnswer}`);

  // Retrieve the correct answer from your database
  const { error, result } = await getCorrectAnswerForQuestion(question_id);

  if (error) {
    res.status(500).json({ error: "server error" });
    return;
  }

  const correctAnswer = result.answer_text;
  const isCorrect = userAnswer === correctAnswer;

  res.json({ is_correct: isCorrect });
});

answer.post("/", async (req, res) => {
  const { error, result } = await createAnswer(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});

// New route
answer.post('/submit-answers', async (req, res) => {
  const userId = req.userId; // Assuming you get userId from a middleware or session
  const { answers } = req.body; // answers could be an array of { questionId, answer }

  const { error, points } = await submitAnswersAndGetPoints(userId, answers);

  if (error) {
    res.status(500).json({ error: "server error" });
    return;
  }

  res.json({ pointsEarned: points });
});

module.exports = answer;
