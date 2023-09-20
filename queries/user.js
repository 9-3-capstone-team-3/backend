const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");

const saltRounds = 10

const getAllUsers = async () => {
  try {
    const result = await db.any("SELECT * FROM users");
    return { result };
  } catch (error) {
    return { error };
  }
};
//just a note

const getUser = async (user_id) => {
  try {//${}
    const result = await db.one("SELECT * FROM users WHERE user_id=$1", [user_id]);

    return { result };
  } catch (error) {
    return { error };
  }
};

const createUser = async (user) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    // Insert into the database
    const result = await db.one(
      `INSERT INTO users(username, email, firstname, lastname, password, level_number) 
        VALUES($1, $2, $3, $4, $5, $6) 
        RETURNING *;`,
      [
        user.username,
        user.email,
        user.firstname,
        user.lastname,
        user.password,  // Here, user.password is already the hashed version
        user.level_number,
      ]
    );
    console.log("User data being inserted:", user);

    return { result };
  } catch (error) {
    console.error("Error during user creation:", error);
    return { error: "server error" };
  }
};


const verifyUser = async (email, password) => {
  try {
    const user = await db.oneOrNone(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    if (!user) {
      console.log("User not found with email:", email);
      return false;
    }

   

    // Actual password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match for email:", email);
    }
    return isMatch ? user : false;
  } catch (error) {
    console.error("Error in verifyUser:", error);
    throw error;
  }
};

const deleteUser = async (user_id) => {
  try {
    const result = await db.one(
      "DELETE FROM users WHERE user_id=$1 RETURNING *",
      user_id
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updateUser = async (user_id, user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10); //if password is updated hash the new one
    const result = await db.one(
      `UPDATE users SET username=$1, email=$2, firstname=$3, lastname=$4, password=$5, level_number=$6 WHERE user_id=$7 RETURNING *`,
      [
        user.username,
        user.email,
        user.firstname,
        user.lastname,
        hashedPassword,
        user.level_number,
        user_id,
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const getCompletedQuizzesForUser = async (user_id) => {
  try {
    const completedQuizzes = await db.any(
      `SELECT quiz_id FROM user_completed_quizzes WHERE user_id=$1`,
      [user_id]
    );
    return completedQuizzes.map((quiz) => quiz.quiz_id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  verifyUser,
  deleteUser,
  updateUser,
  getCompletedQuizzesForUser
};
