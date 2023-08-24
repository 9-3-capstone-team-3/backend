const db = require("../db/dbConfig");

const getAllQuestions = async () => {
  try {
    const result = await db.any("SELECT * FROM question");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getQuestion = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM question where id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};
 

  module.exports = {
    getAllQuestions,
    getQuestion
  };