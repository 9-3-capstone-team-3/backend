INSERT INTO status (status_name) 
VALUES
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');

-- Insert users
INSERT INTO users (username, email, firstname, lastname, password, total_points, last_login) VALUES
('codefusionuser1', 'user1@gmail.com', 'John', 'Smith', 'password123', 50, current_timestamp),
('codefusionuser2', 'user2@gmail.com', 'Jane', 'Smith', 'password456', 60, current_timestamp),
('codefusionuser3', 'user3@gmail.com', 'Jimmy', 'Smith', 'password789', 70, current_timestamp);

-- Insert quiz (set of questions)

INSERT INTO quiz(status_name, name, video_id) VALUES 
('Beginner', 'Git Basics', 'hfsP3lXoSMc'),
('Beginner', 'Setting up Git', 'GgUIwRtLvrw'),
('Beginner', 'Initialize Git', 'FCBVWCulNgk'),
('Beginner', 'Git Commands Branches and Merges', '3QHmKcs2MVY');




-- Insert question types
INSERT INTO prompt_type(name, points) VALUES
('Multiple Choice', 5), ('Single', 10), ('Boolean', 15);

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, prompt_type_id) VALUES
('What is git?', 1, 1),
('Where do we get git from?', 1, 1),
('Where do we use git commands?', 1, 1),
('Git tracks every version of your code, while gitHub…', 1, 1),
('Why should we learn how to use git?', 1, 1),
('Write the git configuration command to set up Git with Github.', 2, 2),
('Write the git configuration command that does not require a password.', 2, 2),
('We can initialize git on a project that already exists on a local machine', 3, 3),
('What is the command to initialize git into an already existing file?', 3, 2),
('After you create a repository on gitHub, you should go inside your project terminal and type "git clone http or ssh key"', 3, 3),
('Write the command to merge a branch to the main branch', 4, 2),
('Write the short command to create a branch and switch to a branch', 4, 2),
('When you git commit, you must git push to send your commits to the remote GitHub', 4, 3);



INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
('True', false, 1, 1),
('False', true, 1, 1),
('True', true, 2, 1),
('False', false, 2, 1),
('A version control system', true, 3, 1),
('A garbage can', false, 3, 1),
('A remote way to store code', false, 3, 1),
('Download git from GitHub.com', true, 4, 1),
('It is already built into our computers', false, 4, 1),
('Walmart', false, 4, 1),
('On the terminal', true, 5, 1),
('In space', false, 5, 1),
('At a command center', false, 5, 1),
('only stores code', true, 6, 1),
('writes your code for you', false, 6, 1),
('debugs your code', false, 6, 1),
('Git is the most popular choice for version control for developers today', true, 7, 1),
('Git cures boredom', false, 7, 1),
('Git can crash our computers and cause major problems', false, 7, 1),
('Git config --global user.name (your name here)',true, 8,2),
('Git config --global core.editor (code --wait)',true,9,2),
('True',true, 10, 3),
('Git init',true, 11, 2),
('True',true, 12, 3),
('Git merge branch_name',true, 13, 2),
('Git checkout -b branch_name',true, 14, 2),
('True',true, 15, 3);


-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);





