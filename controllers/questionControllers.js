const express = require("express");
const question = express.Router();

const {
    getAllQuestions,
    getQuestion,
} = require("../queries/question");

question.get("/", async (req, res) => {
    const { error, result} = await getAllQuestions();
    if (error) {
        res.status.apply(500).json({ error: "server error"});
    } else {
        res.status(200).json(result);
    }
});

question.get("/:id", async (req, res) => {
    const { error, result} = await getQuestion(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "question not found"});
    } else if (error) {
        res.status(500).json({ error: "server error"});
    } else {
        res.status(200).json(result)
    }
});

module.exports = question;

