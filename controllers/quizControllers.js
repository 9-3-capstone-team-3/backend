const express = require("express");
const quiz = express.Router();

const {
    getAllQuiz,  
    getQuiz} = require('../queries/quiz.js')


//index
quiz.get("/", async (req, res) => {
    const { error, result } = await getAllQuiz();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

//show
quiz.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getQuiz(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "Quiz not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });




module.exports = quiz