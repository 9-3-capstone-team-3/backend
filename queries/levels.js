const db = require("../db/dbConfig");
const updateLevels = async () => {
    let transaction; // Declare a transaction variable

    try {
        // Start a transaction
        transaction = await db.tx();
        console.log('Transaction started'); // Add this log

        // Fetch questions ordered by their IDs
        const questions = await transaction.any(`SELECT question_id FROM question ORDER BY question_id`);
        console.log('Fetched questions:', questions); // Add this log

        // Update level_number based on the order of questions
        for (let index = 0; index < questions.length; index++) {
            const questionId = questions[index].question_id;
            const levelNumber = index + 1;

            await transaction.none(`UPDATE question SET level_number = $1 WHERE question_id = $2`, [
                levelNumber,
                questionId,
            ]);
            console.log(`Updated question_id ${questionId} with level_number ${levelNumber}`); // Add this log
        }

        // Commit the transaction
        await transaction.commit();
        console.log('Transaction committed successfully'); // Add this log

        console.log('Level numbers updated successfully.');
    } catch (error) {
        // Rollback the transaction if an error occurs
        if (transaction) {
            await transaction.rollback();
            console.log('Transaction rolled back due to error'); // Add this log
        }

        console.error('Error updating level numbers', error);
    }
};
module.exports = updateLevels;
