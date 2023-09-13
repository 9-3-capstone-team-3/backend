\c codefusion_db
--Level 1: Boolean, Level 2: Multiple-Choice, Level 3: Single, Level 4: All types(stretch goal)
-- Insert levels
INSERT INTO level (level_name) 
VALUES
('Level 1'), ('Level 2'), ('Level 3'), ('Level 4'), ('Level 5');

INSERT INTO status (status_name) 
VALUES
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');

-- Insert users
INSERT INTO users (username, email, firstname, lastname, password, level_id) VALUES
('codefusionuser1', 'user1@gmail.com', 'John', 'Smith', 'password123', 1);

-- Insert quiz (set of questions)
INSERT INTO quiz(level_id, name, video_url) VALUES 
(1, 'Initial landing page questions', 'https://youtu.be/hfsP3lXoSMc'),
(2, 'Git Basics', 'https://youtu.be/GgUIwRtLvrw'),
(3, 'Setting up Git', 'https://youtu.be/FCBVWCulNgk'),
(4, 'Initialize Git', 'https://youtu.be/3QHmKcs2MVY'),
(5, 'Git Commands Branches and Merges', NULL);


-- Insert question types
INSERT INTO prompt_type(name) VALUES
('Multiple Choice'), ('Single'), ('Boolean');

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, prompt_type_id) VALUES
('What is git?', 2, 1),
('Where do we get git from?', 2, 1),
('Where do we use git commands?', 2, 1),
('Git tracks every version of your code, while gitHub…', 2, 1),
('Why should we learn how to use git?', 2, 1),
('Write the git configuration command to set up Git with Github.',3,2),
('Write the git configuration command that does not require a password.',3,2),
('We can initialize git on a project that already exists on a local machine',4,3),
('What is the command to initialize git into an already existing file?',4,2),
('After you create a repository on gitHub, you should go inside your project terminal and type "git clone http or ssh key"',4,3),
('Write the command to merge a branch to the main branch', 5, 2),
('Write the short command to create a branch and switch to a branch',5,2),
('When you git commit, you must git push to send your commits to the remote GitHub',5,3);
--RETURNING question_id;

INSERT INTO intro_question (prompt_type_id, prompt) VALUES 
(3, 'Software developers work on teams to complete projects'),
(3, 'Developers should use a version tracker to keep track of code changes, in case something goes wrong');

INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
('A version control system', true, 1, 1),
('A garbage can', false, 1, 1),
('A remote way to store code', false, 1, 1),
('Download git from git.scm.com', true, 2, 1),
('It is already built into our computers', false, 2, 1),
('Walmart', false, 2, 1),
('On the terminal', true, 3, 1),
('In space', false, 3, 1),
('At a command center', false, 3, 1),
('only stores code', true, 4, 1),
('writes your code for you', false, 4, 1),
('debugs your code', false, 4, 1),
('Git is the most popular choice for version control for developers today', true, 5, 1),
('git cures boredom', false, 5, 1),
('git can crash our computers and cause major problems', false, 5, 1),
('git config --global user.name (your name here)',true, 6,2),
('git config --global core.editor (code --wait)',true,7,2),
('true',true, 8, 3),
('git init',true, 9, 2),
('true',true, 10, 3),
('git merge branch_name',true, 11, 2),
('git checkout -b branch_name',true, 12, 2),
('true',true, 13, 3);


-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);

-- -- Insert progress
-- INSERT INTO progress (user_id, points) VALUES
-- (1, 0);



