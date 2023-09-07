const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  try {
    const result = await db.any("SELECT * FROM users");
    return { result };
  } catch (error) {
    return { error };
  }
};

const getUser = async (id) => {
  try {
    const result = await db.one(`SELECT * FROM users where id=${id}`);
    return { result };
  } catch (error) {
    return { error };
  }
};
 
const createUser = async (user) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);//use bycrpyt to hash the user password
        const result = await db.one(`INSERT INTO users(username, email, firstname, lastname, password, level_id) 
        VALUES($1, $2, $3, $4, $5, $6) 
        RETURNING *;`,
        [user.username, user.email, user.firstname, user.lastname, hashedPassword, user.level_id]
        );
        return { result };
    } catch (error) {
        return { error };
    }
};

const verifyUser = async (email, password) => {
    try {
      const user = await db.oneOrNone(`SELECT password FROM users WHERE email = $1`, [email]);
      if (!user) return false;
      const isMatch = await bcrypt.compare(password, user.password);
      return isMatch ? user : false;
    } catch (error) {
      throw error;
    }
};

const deleteUser = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM users WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };
  
  const updateUser = async (id, user) => {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10)//if password is updated hash the new one
      const result = await db.one(
        `UPDATE users SET username=$1, email=$2, firstname=$3, lastname=$4, password=$5, level_id=$6 WHERE id=$7 RETURNING *`,
        [
          user.username,
          user.email,
          user.firstname,
          user.lastname,
          hashedPassword,
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
    verifyUser,
    deleteUser,
    updateUser,
  };