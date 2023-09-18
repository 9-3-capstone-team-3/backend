// queries/quiz.js
const db = require("../db/dbConfig");



const getAllQuiz = async () => {
  try {
    const result = await db.any("SELECT * FROM quiz");
    return { result };
  } catch (error) {
    return { error };
  }
};



const getQuiz = async (quiz_id) => {
  try {
    const result = await db.oneOrNone("SELECT * FROM quiz WHERE quiz_id = $1", [
      quiz_id,
    ]);
    return { result };
  } catch (error) {
    return { error };
  }
};

const getQuizQuestions = async (quiz_id) => {
  try {
    const result = await db.any("SELECT * FROM question WHERE quiz_id = $1", [
      quiz_id,
    ]);
    return { result };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllQuiz,
  getQuiz,
  getQuizQuestions,
};
