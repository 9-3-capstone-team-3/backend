const express = require("express");
const submission = express.Router();

const validateSubmission = require("../validations/validateSubmission");

const {
    getAllSubmisssions,
    getSubmission,
    deleteSubmission,
    createSubmission,
    updateSubmission,
} = require("../queries/submission")

submission.get("/", async (req, res) => {
    const {error, result} = await getAllSubmisssions();
    if (error) {
        res.send(500).json({ error: "server error"});
    } else {
        res.send(200).json(result)
    }
});

submission.get("/:id", async (req, res) => {
    const { error, result} = await getSubmission(id);
    if (error?.code === 0 ){
        res.send(404).json({error: "submission not found"});
    } else if (error){
        res.send(500).json({ error: "server error"});
    } else {
        res.send(200).json(result);
    }
});

submission.post("/", validateSubmission, async (req, res) => {
    const { error, result} = await createSubmission(req.body);
    if (error) {
        res.send(500).json({ error: "server error"});
    } else {
        res.status(201).json(result);
    }
});

submission.put("/:id", async (req, res) => {
    const { id } = req.params;
  const { error, result } = await updateSubmission(id, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

submission.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteSubmission(id);
  if (error) {
    res.status(404).json("user not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = submission;