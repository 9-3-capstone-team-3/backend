-- If database exist delete it
DROP DATABASE IF EXISTS codefusion_db;

-- Create database
CREATE DATABASE codefusion_db;

\c codefusion_db;

DROP TABLE IF EXISTS submission CASCADE;
DROP TABLE IF EXISTS progress CASCADE;
DROP TABLE IF EXISTS question CASCADE;
DROP TABLE IF EXISTS answer CASCADE;
DROP TABLE IF EXISTS question_type CASCADE;
DROP TABLE IF EXISTS quiz_video CASCADE;
DROP TABLE IF EXISTS level CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    created_date TIMESTAMP DEFAULT current_timestamp,
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    level_id INT,
    last_login TIMESTAMP
);


CREATE TABLE level(
    created_date TIMESTAMP DEFAULT current_timestamp,
    level_id SERIAL PRIMARY KEY,
    level_name TEXT NOT NULL
);
CREATE TABLE quiz (
    created_date TIMESTAMP DEFAULT current_timestamp,
    quiz_id SERIAL PRIMARY KEY,
    name TEXT,
    level_id INT REFERENCES level(level_id)
);

CREATE TABLE quiz_video(
    created_date TIMESTAMP DEFAULT current_timestamp,
    quiz_video_id SERIAL PRIMARY KEY,
    url VARCHAR(255)
);

CREATE TABLE prompt_type(
    prompt_type_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE question(
    question_id SERIAL PRIMARY KEY,
    created_date TIMESTAMP DEFAULT current_timestamp,
    prompt VARCHAR(255) NOT NULL,
    quiz_id INT REFERENCES quiz(quiz_id),
    prompt_type_id INT REFERENCES prompt_type(prompt_type_id)
    
);

CREATE TABLE answer(
    created_date TIMESTAMP DEFAULT current_timestamp,
    answer_id SERIAL PRIMARY KEY,
    answer_text TEXT,
    is_correct BOOLEAN,
    question_id INT REFERENCES question(question_id),
    prompt_type_id INT REFERENCES prompt_type(prompt_type_id)
);





CREATE TABLE submission(
    created_date TIMESTAMP DEFAULT current_timestamp,
    submission_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    user_answer VARCHAR(255),
    is_correct BOOLEAN
);