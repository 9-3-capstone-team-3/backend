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
      res.status(500).json({ error: "server error"});
  } else {
      res.status(200).json(result);
  }
});


submission.get("/:submission_id", async (req, res) => {
  const id = req.params.submission_id
    const { error, result} = await getSubmission(id);
    if (error?.code === 0 ){
        res.status(404).json({error: "submission not found"});
    } else if (error){
        res.status(500).json({ error: "server error"});
    } else {
        res.status(200).json(result);
    }
});

submission.post("/", async (req, res) => {
  console.log("POST /submission route accessed");
  try {
      const { error, result} = await createSubmission(req.body);
      if (error) {
          res.status(500).json({ error: "server error"});
      } else {
          res.status(201).json(result);
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An unexpected error occurred." });
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