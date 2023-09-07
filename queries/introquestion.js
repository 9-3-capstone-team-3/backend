const db = require("../db/dbConfig");

 const getAllIntroQuestions = async () => {
    try {
        const result = await db.any(`SELECT * FROM intro_question`);
        return { result };
    } catch (error) {
        return { error };
    }
 };

 const getIntroQuestion = async () => {
    try {
        const result = await db.any(`SELECT * FROM intro_question WHERE id=${id}`);
        return { result };
    } catch (error) {
        return {error};
 }
};

module.exports = {
    getAllIntroQuestions,
    getIntroQuestion,
};