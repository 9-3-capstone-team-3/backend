const db = require("../db/dbConfig");

const getUserProfileById = async (user_id) => {
    try {
        const result = await db.one("SELECT * FROM users WHERE user_id = $1", [user_id]);
        return { result };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    getUserProfileById,
};