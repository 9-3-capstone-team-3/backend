\c codefusion_db
--Level 1: Boolean, Level 2: Multiple-Choice, Level 3: Single, Level 4: All types(stretch goal)
-- Insert levels
INSERT INTO level (level_name) 
VALUES
('Level 1'), ('Level 2'), ('Level 3'), ('Level 4');

-- Insert users
INSERT INTO users (username, email, firstname, lastname, password, level_id) VALUES
('codefusionuser1', 'user1@gmail.com', 'John', 'Smith', 'password123', 1);

-- Insert quiz (set of questions)
INSERT INTO quiz(level, name);

-- Insert quiz videos
INSERT INTO quiz_video (url, quiz_id) VALUES
('https://youtu.be/hfsP3lXoSMc');

-- Insert question types
INSERT INTO prompt_type(name) VALUES
('Multiple Choice'), ('Single'), ('Boolean');

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, question_type_id) VALUES
('What is git?', 1, 1, 2),
('Where do we get git from?', 1, 1, 3),
('Where do we use git commands?', 1, 1, 2),
('Git tracks every version of your code, while gitHub…', 1, 1, 2),
('Why should we learn how to use git?', 1, 1, 2);

-- Insert answers (without question_id)
INSERT INTO answer (prompt_type, answer_text, is_correct) VALUES
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

-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct = null) VALUES
(1, 'A version control system', true);

-- -- Insert progress
-- INSERT INTO progress (user_id, points) VALUES
-- (1, 0);



