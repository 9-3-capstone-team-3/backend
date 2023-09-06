const db = require("../db/dbConfig");

const getAllSubmisssions = async () => { 
    try {
       const result = await db.any(`SELECT * FROM submission`);
       return { result };
    } catch (error) {
        return { error };
    }
};

const getSubmission = async () => {
    try {
        const result = await db.one(`SELECT * FROM submission WHERE id={id}`);
        return { result };
    } catch (error) {
        return { error }
    }
};


const createSubmission = async (submission) => {
    try {
        const result = await db.one(`INSERT INTO submission(user_id, user_answer, is_correct) 
        VALUES ($1, $2, $3)
        RETURNING *;`,
        [submission.user_id, submission.user_answer, submission.is_correct]
        );
        return { result };
    } catch (error) {
        return { error};
    }
};

const deleteSubmission = async (id) => {
    try {
        const result = await db.one(`DELETE FROM submission where id=$1 RETURNING *`, id);
        return { result };
    } catch (error) {
        return { error };
    }
};

const updateSubmission = async (submission) => {
    try {
        const result = await db.one(`UPDATE submission SET user_id=$1, user_answer=$2, is_correct=$3`, 
        [submission.user_id, submission.user_answer, submission.is_correct]
        );
        return { result };
    } catch (error) {
        return { error};
    }
};

module.exports = {
    getAllSubmisssions,
    getSubmission,
    deleteSubmission,
    createSubmission,
    updateSubmission,
};

