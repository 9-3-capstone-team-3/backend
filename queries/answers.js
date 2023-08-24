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



  module.exports = {
    getAllAnswers,
    getAnswer,
    createAnswer
  };