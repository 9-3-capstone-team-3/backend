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

// submission.get("/", async (req, res) => {
//     const {error, result} = await getAllSubmisssions();
//     if (error) {
//         res.send(500).json({ error: "server error"});
//     } else {
//         res.send(200).json(result)
//     }
// });

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
submission.post("/updateUserPoints", async (req, res) => {
  const { userId, points } = req.body;

  try {
      // Update the user's total points
      await pool.query(
          `UPDATE users SET total_points = total_points + $1 WHERE user_id = $2`,
          [points, userId]
      );

      res.status(200).json({ message: "Points updated successfully!" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
  }
});

submission.post("/completeQuiz", async (req, res) => {
  const { userId, quizId } = req.body;

  // Insert into user_completed_quizzes
  try {
      await pool.query(
          `INSERT INTO user_completed_quizzes(user_id, quiz_id, completed_at)
           VALUES($1, $2, NOW())`,
          [userId, quizId]
      );

      res.status(200).json({ message: "Quiz completion recorded successfully!" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
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