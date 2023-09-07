const db = require("../db/dbConfig");

 const getAllQuestions = async () => {
    try {
        const result = await db.any(`SELECT * FROM question`);
        return { result };
    } catch (error) {
        return { error };
    }
 };

 const getQuestion = async () => {
    try {
        const result = await db.any(`SELECT * FROM question WHERE id=${id}`);
        return { result };
    } catch (error) {
        return {error};
 }
};

module.exports = {
    getAllQuestions,
    getQuestion,
};