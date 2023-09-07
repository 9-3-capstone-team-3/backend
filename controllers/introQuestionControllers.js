const express = require("express");
const introquestion = express.Router();

// const validateQueston = require("./validations/validateQuestion");
const {
    getAllIntroQuestions,
    getIntroQuestion,
} = require("../queries/introquestion.js");

introquestion.get("/", async (req, res) => {
    const { error, result} = await getAllIntroQuestions();
    if (error) {
        res.status.apply(500).json({ error: "server error"});
    } else {
        res.status(200).json(result);
    }
});

introquestion.get("/:id", async (req, res) => {
    const { error, result} = await getIntroQuestion(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "Question not found"});
    } else if (error) {
        res.status(500).json({ error: "server error"});
    } else {
        res.status(200).json(result)
    }
});

module.exports = introquestion;

