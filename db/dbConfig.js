const pgp = require("pg-promise")();
require("dotenv").config()

const connectionString = process.env.ELEPHANTSQL_URL;

const db = pgp({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false  // Used for ElephantSQL as it requires SSL
    }
});

// const cn = {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER // removed an extra space on this line - MR
// };

// const db = pgp(cn);

module.exports = db;