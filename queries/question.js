const db = require("../db/dbConfig");

const getAllQuestions = async (quiz_id) => {
    try {
        const result = await db.any(`SELECT * FROM question WHERE quiz_id=$1`, [quiz_id]);
        return { result };
    } catch (error) {
        return { error };
    }
};

  
  
  
 const getQuestion = async (id) => {
    try {
        const result = await db.any(`SELECT * FROM question WHERE id=${id}`);
        return { result };
    } catch (error) {
        return {error};
 }
};

const getAnswersByQuestionId = async (id) => {
    try {
        const result = await db.any(`SELECT * FROM answer WHERE question_id=$1`, [id]);
        return { result };
    } catch (error) {
        return { error };
    }
};
module.exports = {
    getAllQuestions,
    getQuestion,
    getAnswersByQuestionId,
};