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
(1, 'Git Basics'),
(2, 'Setting up Git'),
(3, 'Initialize Git'),
(4, 'Git Commands Branches and Merges');

-- Insert quiz videos
INSERT INTO quiz_video (url) VALUES
('https://youtu.be/hfsP3lXoSMc'),
('https://youtu.be/GgUIwRtLvrw'),
('https://youtu.be/FCBVWCulNgk'),
('https://youtu.be/3QHmKcs2MVY');

-- Insert question types
INSERT INTO prompt_type(name) VALUES
('Multiple Choice'), ('Single'), ('Boolean');

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, prompt_type_id) VALUES
('What is git?', 1, 3),
('Where do we get git from?', 1, 3),
('Where do we use git commands?', 1, 3),
('Git tracks every version of your code, while gitHub…', 1, 3),
('Why should we learn how to use git?', 1, 3),
('Write the git configuration command to set up Git with Github.',2,2),
('Write the git configuration command that does not require a password.',2,2),
('We can initialize git on a project that already exists on a local machine',3,3),
('What is the command to initialize git into an already existing file?',3,2),
('After you create a repository on gitHub, you should go inside your project terminal and type "git clone http or ssh key"',3,3),
('Write the command to merge a branch to the main branch', 4, 2),
('Write the short command to create a branch and switch to a branch',4,2),
('When you "git commit", you must git push to send your commits to the remote GitHub',4,3)
RETURNING question_id;


INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
('A version control system', true, 1, 3),
('A garbage can', false, 1, 3),
('A remote way to store code', false, 1, 3),
('Download git from git.scm.com', true, 2, 3),
('It is already built into our computers', false, 2, 3),
('Walmart', false, 2, 3),
('On the terminal', true, 3, 3),
('In space', false, 3, 3),
('At a command center', false, 3, 3),
('only stores code', true, 4, 3),
('writes your code for you', false, 4, 3),
('debugs your code', false, 4, 3),
('Git is the most popular choice for version control for developers today', true, 5, 3),
('git cures boredom', false, 5, 3),
('git can crash our computers and cause major problems', false, 5, 3)
('git config --global user.name "your name here"',true, 6,2),
('git config --global core.editor "code --wait"',true,7,2),
('true',8,3),
('git init',9,2),
('true',10,3),
('git merge branch_name',11,2),
('git checkout -b branch_name',12,2),
('true',13,3);

-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);

-- -- Insert progress
-- INSERT INTO progress (user_id, points) VALUES
-- (1, 0);



