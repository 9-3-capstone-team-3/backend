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
INSERT INTO quiz(level_id, name) VALUES 
(1, 'Initial landing page questions'),
(2, 'What is git?'),
(3, 'Git setup'),
(4, 'Git started');

-- Insert quiz videos ..Must figure out a way to add quiz_id
INSERT INTO quiz_video (url) VALUES
('https://youtu.be/hfsP3lXoSMc');

-- Insert question types
INSERT INTO prompt_type(name) VALUES
('Multiple Choice'), ('Single'), ('Boolean');

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, prompt_type_id) VALUES
('Software developers work on teams to complete projects', 1, 3),
('Developers should use a version tracker to keep track of code changes, in case something goes wrong', 1, 3),
('What is git?', 2, 1),
('Where do we get git from?', 2, 1),
('Where do we use git commands?', 2, 1),
('Git tracks every version of your code, while gitHub…', 2, 1),
('Why should we learn how to use git?', 2, 1);


INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
('True', true, 1, 3),
('True', true, 2, 3),
('A version control system', true, 3, 1),
('A garbage can', false, 3, 1),
('A remote way to store code', false, 3, 1),
('Download git from git.scm.com', true, 4, 1),
('It is already built into our computers', false, 4, 1),
('Walmart', false, 4, 1),
('On the terminal', true, 5, 1),
('In space', false, 5, 1),
('At a command center', false, 5, 1),
('only stores code', true, 6, 1),
('writes your code for you', false, 6, 1),
('debugs your code', false, 6, 1),
('Git is the most popular choice for version control for developers today', true, 7, 1),
('git cures boredom', false, 7, 1),
('git can crash our computers and cause major problems', false, 7, 1);

-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);

-- -- Insert progress
-- INSERT INTO progress (user_id, points) VALUES
-- (1, 0);



