const db = require("../db/dbConfig");

const getUserProfileById = async (user_id) => {
    try {
        const result = await db.one("SELECT * FROM users WHERE user_id = $1", [user_id]);
        return { result };
    } catch (error) {
        return { error };
    }
};

const updateUser = async (user_id, user) => {
    try {
      // const hashedPassword = await bcrypt.hash(user.password, 10); //if password is updated hash the new one
      const result = await db.one(
        `UPDATE users SET username=$1, email=$2, firstname=$3, lastname=$4 WHERE user_id=$5 RETURNING *`,
        [
          user.username,
          user.email,
          user.firstname,
          user.lastname,
          user_id,
        ]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

module.exports = {
    getUserProfileById,
    updateUser,
};