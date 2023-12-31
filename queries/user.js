const db = require("../db/dbConfig");
// const bcrypt = require("bcrypt");

// const saltRounds = 10

const getAllUsers = async () => {
  try {
    const result = await db.any("SELECT * FROM users");
    return { result };
  } catch (error) {
    return { error };
  }
};


const getUserByID = async (user_id) => {
  try {
    const result = await db.one("SELECT * FROM users WHERE user_id=$1", [user_id]);

    return { result };
  } catch (error) {
    return { error };
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await db.one("SELECT * FROM users WHERE email=$1", [email]);

    return { result };
  } catch (error) {
    return { error };
  }
};


const createUser = async (user) => {
  try {
    // Hash the password
    // const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    // user.password = hashedPassword;

    // Insert into the database
    const result = await db.one(
      `INSERT INTO users(username, email, firstname, lastname, auth_id) 
        VALUES($1, $2, $3, $4, $5) 
        RETURNING *;`,
      [
        user.username,
        user.email,
        user.firstname,
        user.lastname,
        user.auth_id  // Here, user.password is already the hashed version
        
      ]
    );
    console.log("User data being inserted:", user);

    return { result };
  } catch (error) {
    console.error("Error during user creation:", error);
    return { error: "server error" };
  }
};


// const verifyUser = async (email, password) => {
//   try {
//     const user = await db.oneOrNone(`SELECT * FROM users WHERE email = $1`, [
//       email,
//     ]);
//     if (!user) {
//       console.log("User not found with email:", email);
//       return false;
//     }

   

//     // Actual password check
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Password does not match for email:", email);
//     }
//     return isMatch ? user : false;
//   } catch (error) {
//     console.error("Error in verifyUser:", error);
//     throw error;
//   }
// };

// const deleteUser = async (user_id) => {
//   try {
//     const result = await db.one(
//       "DELETE FROM users WHERE user_id=$1 RETURNING *",
//       user_id
//     );
//     return { result };
//   } catch (error) {
//     return { error };
//   }
// };

const updateUser = async (user_id, user) => {
  try {
    // const hashedPassword = await bcrypt.hash(user.password, 10); //if password is updated hash the new one
    const result = await db.one(
      `UPDATE users SET username=$1, firstname=$2, lastname=$3 WHERE user_id=$4 RETURNING *`,
      [
        user.username,
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
const updateUserPoints = async (user_id, pointsToAdd) => {
  try {
    const result = await db.one(
      `UPDATE users SET total_points = total_points + $1 WHERE user_id = $2 RETURNING total_points`,
      [pointsToAdd, user_id]
    )
    return { result }
  } catch (error) {
    return { error }
  }
}

const updateUserLogin = async (user_id, timestamp) => {
  try {
    const result = await db.one(
      `UPDATE users SET last_login = $1 WHERE user_id = $2 RETURNING last_login`,
      [timestamp, user_id]
    )
    return { result }
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserByID,
  createUser,
  // verifyUser,
  // deleteUser,
  updateUser,
  getCompletedQuizzesForUser,
  updateUserPoints,
  updateUserLogin
};
