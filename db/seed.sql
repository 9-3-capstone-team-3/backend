\c codefusion_db

INSERT INTO status (status_name) 
VALUES
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');

-- Insert users
INSERT INTO users (username, email, firstname, lastname, total_points, last_login, auth_id) VALUES
('codefusionuser1', 'user1@gmail.com', 'John', 'Smith',  50, current_timestamp, 'R4XmsqucCKgux3GdOoasdLOqQiJ3'),
('codefusionuser2', 'user2@gmail.com', 'Jane', 'Smith',  60, current_timestamp, 'F2XwtnymCKgux3GdOoESJLOqQiJ3'),
('codefusionuser3', 'user3@gmail.com', 'Jimmy', 'Smith',  70, current_timestamp, 'K9XfrfymCKqxp3GnUdELQLOqQiJ3');

-- Insert quiz (set of questions)

INSERT INTO quiz(name, video_id) VALUES 
('Version Control', '') /* video_id for Version Control will be placed inside quotes when available */
('Install Git', 'hfsP3lXoSMc'),
('GitHub Setup', 'GgUIwRtLvrw'),
('Create Repository', 'FCBVWCulNgk'),
('Git Intro', '3QHmKcs2MVY'),
('Git Basics', 'hfsP3lXoSMc') /* inserted video_id to Git Basics Video we already had created */

-- Insert question types
INSERT INTO prompt_type(name, points) VALUES
('Multiple Choice', 5), ('Single', 10), ('Boolean', 15);

-- Insert questions (without answer_id)
INSERT INTO question (prompt, quiz_id, prompt_type_id) VALUES
            -- Quiz 1: Version Control questions
('Who first brought up the topic of Version Control?', 1, 1),
('What analogy did Jacob use to explain Version Control?', 1, 1),
('According to the script, what does Version Control allow developers to do?', 1, 1),
("What was Ada's understanding of Version Control after Jacob's explanation?", 1, 1),
('How does Jacob describe the purpose of Version Control in the development process?', 1, 1),
(`When Ada says, "let's see if we 'Git it'!", she's making a pun on which term?`, 1, 1),
('According to the script, what happens when two developers make changes without Version Control?', 1, 1),
            -- Quiz 2: Installing Git questions
('Who is seeking guidance on setting up Git?', 2, 1),
('What approach did Jacob suggest for Linda to understand the setup process?', 2, 1),
('Where would one normally start the Git installation process?', 2, 1),
('What should Linda see on the Git website to initiate the download?', 2, 1),
('How can Linda verify if Git has been successfully installed on her machine?', 2, 1),
('Why is it important to set up an identity with Git?', 2, 1),
('What feeling did Linda express after the simulated run-through?', 2, 1),
('According to Jacob, what is key for collaborative development?', 2, 1),
            -- Quiz 3: GitHub Setup questions
('Who initiated the conversation about setting up a GitHub account?', 3, 1),
('How does Gabriella describe the process of setting up a GitHub account?', 3, 1),
('What did Ada and Gabriella decide to do instead of actually setting up a GitHub account?', 3, 1),
('What username did they imagine Ada choosing during the simulation?', 3, 1),
('After choosing a username, what would be the next steps in the actual setup process?' 3, 1),
(`In the simulation, what did they picture as Ada's GitHub profile picture?`, 3, 1),
('What bio did they imagine Ada writing for her GitHub profile during the simulation?', 3, 1),
(`What was Ada's reaction to the simulated process?`, 3, 1),
            -- Quiz 4: Creating Repository questions
(`What did Gabriella compare a Git repository to when explaining it's significance to Jacob?`, 4, 1),
('What command does Gabriella mention to initiate a new Git repository?', 4, 1),
('What does the `.git` folder represent in a Git repository?', 4, 1),
('According to the script, why is setting up a repository essential for a project?', 4, 1),
            -- Quiz 5: Git Intro questions
('', 5, 1),
('', 5, 1),
('', 5, 1),
('', 5, 1),
('', 5, 1),
('', 5, 1),
            -- Quiz 6: Git Basics questions
('', 6, 1),
('', 6, 1),
('', 6, 1),
('', 6, 1),
('', 6, 1),
('', 6, 1),



INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
('A version control system', true, 1, 1),
('A garbage can', false, 1, 1),
('A remote way to store code', false, 1, 1),
('Download git from GitHub.com', true, 2, 1),
('It is already built into our computers', false, 2, 1),
('Walmart', false, 2, 1),
('On the terminal', true, 3, 1),
('In space', false, 3, 1),
('At a command center', false, 3, 1),
('only stores code', true, 4, 1),
('writes your code for you', false, 4, 1),
('debugs your code', false, 4, 1),
('Git is the most popular choice for version control for developers today', true, 5, 1),
('Git cures boredom', false, 5, 1),
('Git can crash our computers and cause major problems', false, 5, 1),
('Git config --global user.name (your name here)',true, 6,2),
('Git config --global core.editor (code --wait)',true,7,2),
('True',true, 8, 3),
('Git init',true, 9, 2),
('True',true, 10, 3),
('Git merge branch_name',true, 11, 2),
('Git checkout -b branch_name',true, 12, 2),
('True',true, 13, 3);


-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);





