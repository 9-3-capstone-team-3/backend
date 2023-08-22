\c codefusion_db

-- Insert levels
INSERT INTO level (level_name) 
VALUES
('Beginnner'), ('Intermediate'), ('Advanced');

-- Insert users
INSERT INTO users (username, email, firstname, lastname, password, level_id) VALUES
('codefusionuser1', 'user1@gmail.com', 'John', 'Smith', 'password123', 1);

-- Insert quiz videos
INSERT INTO quiz_video (quiz_url, quiz_name, quiz_priority) VALUES
('https://youtu.be/hfsP3lXoSMc', 'git basics', 1);

-- Insert question types
INSERT INTO question_type(question_type_name) VALUES
('Multiple Choice'), ('Single Typed'), ('Boolean');

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, level_id, question_type_id) VALUES
('What is git?', 1, 1, 2),
('Where do we get git from?', 1, 1, 3),
('Where do we use git commands?', 1, 1, 2),
('Git tracks every version of your code, while gitHub…', 1, 1, 2),
('Why should we learn how to use git?', 1, 1, 2);

-- Insert answers (without question_id)
INSERT INTO answer (answer_text, is_correct) VALUES
('A version control system', true),
('A garbage can', false),
('A remote way to store code', false),
('Download git from git.scm.com', true),
('It is already built into our computers', false),
('Walmart', false),
('On the terminal', true),
('In space', false),
('At a command center', false),
('only stores code', true),
('writes your code for you', false),
('debugs your code', false),
('Git is the most popular choice for version control for developers today', true),
('git cures boredom', false),
('git can crash our computers and cause major problems', false);



INSERT INTO question_answer_mapping (question_id, answer_id) VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8), (3, 9),
(4, 10), (4, 11), (4, 12),
(5, 13), (5, 14), (5, 15);
