const db = require("../db/dbConfig");

const getAllAnswers = async () => {
  try {
    const result = await db.any("SELECT * FROM answer");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getAnswer = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM answer where id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};
const getCorrectAnswerForQuestion = async (question_id) => {
  try {
    const result = await db.one(`SELECT answer_text FROM answer WHERE question_id=$1 AND is_correct=true`, [question_id]);
    return { result };
  } catch (error) {
    return { error };
  }
};

 
const createAnswer = async (answer) => {
    try {
        const result = await db.one(`INSERT INTO answer(answer_text, is_correct, question_id, prompt_type_id) 
        VALUES($1, $2, $3, $4) 
        RETURNING *;`,
        [answer.answer_text, answer.is_correct, answer.question_id, answer.prompt_type_id]
        );
        return { result };
    } catch (error) {
        return { error };
    }
};

const submitAnswersAndGetPoints = async (userId, answers) => {
  try {
    let totalPoints = 0;

    // Process each answer
    for (let ans of answers) {
      const correctAnswer = await getCorrectAnswerForQuestion(ans.questionId);
      
      // Increment the points if the answer is correct
      if (ans.answer === correctAnswer.result.answer_text) {
        const question = await db.one(`SELECT prompt_type_id FROM question WHERE question_id=$1`, [ans.questionId]);
        const promptType = await db.one(`SELECT points FROM prompt_type WHERE prompt_type_id=$1`, [question.prompt_type_id]);
        totalPoints += promptType.points;
      }
    }

    // Update the total points for the user (this assumes you want to update the user's total points)
    await db.none(`UPDATE users SET total_points = total_points + $1 WHERE user_id = $2`, [totalPoints, userId]);

    return { points: totalPoints };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllAnswers,
  getAnswer,
  getCorrectAnswerForQuestion,
  createAnswer,
  submitAnswersAndGetPoints  
};