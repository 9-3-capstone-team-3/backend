const db = require("../db/dbConfig");

const getAllQuiz = async () => {
  try {
    const result = await db.any("SELECT * FROM quiz");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getQuiz = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM quiz where id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};
 

  module.exports = {
    getAllQuiz,
    getQuiz
  };