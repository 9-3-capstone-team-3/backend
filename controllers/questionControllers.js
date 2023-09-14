const express = require("express");
const question = express.Router();

// const validateQueston = require("./validations/validateQuestion");
const {
   
    getQuestion,
    getAllQuestions,
} = require("../queries/question");
const { updateLevels } = require("../queries/levels");

question.get('/levels', async (req, res) => {
    try {
        await updateLevels(db); // Call the updateLevels function and pass the db object
        const levels = await db.any(`SELECT question_id, level_number FROM question`);
        res.status(200).json(levels);

    } catch (error) {
        console.error('Error fetching/updating levels:', error);
        res.status(500).json({ error: 'Server error'})
    }
});

question.get("/", async (req, res) => {
    const { error, result} = await getAllQuestions();
    if (error) {
        res.status.apply(500).json({ error: "server error"});
    } else {
        res.status(200).json(result);
    }
});

question.get("/:id", async (req, res) => {
    const { id } = req.params; // Get the id from request parameters
    const { error, result } = await getQuestion(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "question not found" });
    } else if (error) {
        res.status(500).json({ error: "server error" });
    } else {
        res.status(200).json(result);
    }
});

module.exports = question;

