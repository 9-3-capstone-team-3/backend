const db = require('../db/dbConfig');

const levels = async () => {
    try {
        //fetch questions ordered by their quiz id
        const quizzes = await db.any(`SELECT DISTINCT quiz_id FROM question ORDER BY quiz_id`);
        console.log('Fetched quizzes', quizzes);

        for (let index = 0; index < quizzes.length; index++) {
            const quizId = quizzes[index].quiz_id;
            const levelNumber = index + 1;

            await db.none(`UPDATE question SET level_number = $1 WHERE quiz_id = $2`, [
                levelNumber,
                quizId,
            ]);
            console.log(`Updated quiz_id ${quizId} with level_number ${levelNumber}`);
        }
        console.log('Level numbers updateed successfully')
    } catch (error) {
        console.error('Error updating level numbers', error)
    }
};

module.exports = levels;