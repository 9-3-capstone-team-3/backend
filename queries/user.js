const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const result = await db.any("SELECT * FROM user");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getUser = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM user where id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};
 
const createUser = async (user) => {
    try {
        const result = await db.one(`INSERT INTO user(username, email, firstname, lastname, password, level_id) 
        VALUES($1, $2, $3, $4, $5, $6) 
        RETURNING *;`,
        [user.username, user.email, user.firstname, user.lastname, user.password, user.level_id]
        );
        return { result };
    } catch (error) {
        return { error };
    }
};

const deleteUser = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM user WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };
  
  const updateUser = async (id, review) => {
    try {
      const result = await db.one(
        `UPDATE user SET username=$1, email=$2, firstname=$3, lastname=$4, password=$5, level_id=$6 WHERE id=$7 RETURNING *`,
        [
          user.username,
          user.email,
          user.firstname,
          user.lastname,
          user.password,
          user.level_id,
          id,
        ]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
  };