-- If the database exists, delete it
DROP DATABASE IF EXISTS codefusion_db;

-- Create the database
CREATE DATABASE codefusion_db;

-- Connect to the codefusion_db database
\c codefusion_db;


DROP TABLE IF EXISTS submission CASCADE;
DROP TABLE IF EXISTS progress CASCADE;
DROP TABLE IF EXISTS question CASCADE;
DROP TABLE IF EXISTS answer CASCADE;
DROP TABLE IF EXISTS question_type CASCADE;
DROP TABLE IF EXISTS quiz_video CASCADE;
DROP TABLE IF EXISTS level CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE status (
    status_id SERIAL PRIMARY KEY,
    status_name TEXT NOT NULL UNIQUE
);


-- Create the prompt_type table
CREATE TABLE prompt_type (
    prompt_type_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    points INT
);

-- Create the question table without foreign keys
CREATE TABLE question (
    question_id SERIAL PRIMARY KEY,
    created_date TIMESTAMP DEFAULT current_timestamp,
    prompt VARCHAR(255) NOT NULL,
    quiz_id INT,
    prompt_type_id INT,
    level_number INT
);

-- Create the answer table
CREATE TABLE answer (
    created_date TIMESTAMP DEFAULT current_timestamp,
    answer_id SERIAL PRIMARY KEY,
    answer_text TEXT,
    is_correct BOOLEAN,
    question_id INT,
    prompt_type_id INT
);

-- Create the quiz table without foreign keys
CREATE TABLE quiz (
    created_date TIMESTAMP DEFAULT current_timestamp,
    quiz_id SERIAL PRIMARY KEY,
    name TEXT,
    status_name TEXT REFERENCES status(status_name),
    video_id VARCHAR(255)
);



-- Create the intro_question table
CREATE TABLE intro_question (
    id SERIAL PRIMARY KEY,
    created_date TIMESTAMP DEFAULT current_timestamp,
    prompt_type_id INT,
    prompt VARCHAR(255) NOT NULL
);

-- Create the users table without foreign keys
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    created_date TIMESTAMP DEFAULT current_timestamp,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    total_points INT,
    last_login TIMESTAMP,
    level_number INT
);

-- Create the submission table
CREATE TABLE submission (
    created_date TIMESTAMP DEFAULT current_timestamp,
    submission_id SERIAL PRIMARY KEY,
    user_id INT,
    user_answer VARCHAR(255),
    is_correct BOOLEAN
);

-- Add foreign key constraints
ALTER TABLE question
    ADD FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id),
    ADD FOREIGN KEY (prompt_type_id) REFERENCES prompt_type(prompt_type_id);

ALTER TABLE answer
    ADD FOREIGN KEY (question_id) REFERENCES question(question_id),
    ADD FOREIGN KEY (prompt_type_id) REFERENCES prompt_type(prompt_type_id);

ALTER TABLE submission
    ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
