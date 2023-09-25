const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Define your database connection URL
const connectionString = 'postgres://sghjqrly:TLJ_uwYVkHcc29xgKnX6_OrlvHgYU64_@peanut.db.elephantsql.com/sghjqrly';

// Create a new PostgreSQL client
const client = new Client({ connectionString });

async function seedDatabase() {
  try {
    // Connect to the database
    await client.connect();

    // Define the path to your schema SQL file
    const schemaFilePath = path.join(__dirname, 'db', 'schema.sql');

    // Read and execute the schema SQL file
    const schemaSql = fs.readFileSync(schemaFilePath, 'utf8');
    await client.query(schemaSql);

    // Define the path to your seed SQL file
    const seedFilePath = path.join(__dirname, 'db', 'seed.sql');

    // Read the seed SQL file
    const seedSql = fs.readFileSync(seedFilePath, 'utf8');

    // Execute the seed SQL script
    await client.query(seedSql);

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the seedDatabase function to start seeding
seedDatabase();