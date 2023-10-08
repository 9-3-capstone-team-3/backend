\c codefusion_db

/* INSERT INTO status (status_name) 
VALUES
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');
*/

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
            -- Quiz 1: Version Control (Questions)
('Who first brought up the topic of Version Control?', 1, 1),
('What analogy did Jacob use to explain Version Control?', 1, 1),
('According to the script, what does Version Control allow developers to do?', 1, 1),
("What was Ada's understanding of Version Control after Jacob's explanation?", 1, 1),
('How does Jacob describe the purpose of Version Control in the development process?', 1, 1),
(`When Ada says, "let's see if we 'Git it'!", she's making a pun on which term?`, 1, 1),
('According to the script, what happens when two developers make changes without Version Control?', 1, 1),
            -- Quiz 2: Installing Git (Questions)
('Who is seeking guidance on setting up Git?', 2, 1),
('What approach did Jacob suggest for Linda to understand the setup process?', 2, 1),
('Where would one normally start the Git installation process?', 2, 1),
('What should Linda see on the Git website to initiate the download?', 2, 1),
('How can Linda verify if Git has been successfully installed on her machine?', 2, 1),
('Why is it important to set up an identity with Git?', 2, 1),
('What feeling did Linda express after the simulated run-through?', 2, 1),
('According to Jacob, what is key for collaborative development?', 2, 1),
            -- Quiz 3: GitHub Setup (Questions)
('Who initiated the conversation about setting up a GitHub account?', 3, 1),
('How does Gabriella describe the process of setting up a GitHub account?', 3, 1),
('What did Ada and Gabriella decide to do instead of actually setting up a GitHub account?', 3, 1),
('What username did they imagine Ada choosing during the simulation?', 3, 1),
('After choosing a username, what would be the next steps in the actual setup process?' 3, 1),
(`In the simulation, what did they picture as Ada's GitHub profile picture?`, 3, 1),
('What bio did they imagine Ada writing for her GitHub profile during the simulation?', 3, 1),
(`What was Ada's reaction to the simulated process?`, 3, 1),
            -- Quiz 4: Creating Repository (Questions)
(`What did Gabriella compare a Git repository to when explaining it's significance to Jacob?`, 4, 1),
('What command does Gabriella mention to initiate a new Git repository?', 4, 1),
('What does the `.git` folder represent in a Git repository?', 4, 1),
('According to the script, why is setting up a repository essential for a project?', 4, 1),
            -- Quiz 5: Git Intro (Questions)
('How did Linda describe `Git` when explaining its purpose to Gabriella?', 5, 1),
('What is a notable feature of `Git` as highlighted by Linda?', 5, 1),
('In Git, how do developers typically share their updates with the team?', 5, 1),
('According to the script, how does Git handle when two developers make changes to the same section of code?', 5, 1),
('What approach does Git allow for ensuring smooth collaboration, as mentioned by Linda?', 5, 1),
('Gabriella mentions that Git is not only about managing code but also about...', 5, 1),
            -- Quiz 6: Git Basics (Questions)
(`How did Linda describe the purpose of 'committing' in Git to Ada?`, 6, 1),
('Which Git command does Linda suggest to stage all changes?', 6, 1),
('To add a description of the changes being committed, which Git command does Linda recommend?', 6, 1),
(`What does creating a 'branch' in Git allow developers to do, as described by Linda?`, 6, 1),
(`To switch to a newly created branch named 'new-feature', which Git command sequence is correct?`, 6, 1),
(`How can a developer integrate updates from a branch named 'new-feature' to the main project?`, 6, 1),



INSERT INTO answer (answer_text, is_correct, question_id, prompt_type_id) VALUES
        -- Quiz 1: Version Control (Answers)
('Lin', false, 1, 1),
('Ada', false, 1, 1),
('Jacob', true, 1, 1),
('Navigating a ship', false, 2, 1),
('Writing chapters in a book', true, 2, 1),
('Weaving a tapestry', false, 2, 1),
('Revisit any point in time in their code', false, 3, 1),
('See who made the last update', false, 3, 1),
('Create alternate realities of a project to test new ideas', false, 3, 1),
('All of the above', true, 3, 1),
("It's a tool to backup code", false, 4, 1),
("It's a way to rewrite code history", false, 4, 1),
('It helps in orchestrating collective efforts without chaos', true, 4, 1),
("It's a code compiler", false, 4, 1),
('As a strict set of rules', false, 5, 1),
('As a debugging tool', false, 5, 1),
('As a collaboration compass', true, 5, 1),
('As a code generator', false, 5, 1),
('Getting the concept', false, 6, 1),
('Git, a version control system', true, 6, 1),
('A famous song', false, 6, 1),
(' None of the above', false, 6, 1),
('Their changes create parallel universes', true, 7, 1),
("One's changes will overwrite the other's", false, 7, 1),
("They can't work on the same project at the same time", false, 7, 1),
('They need to manually combine their code', false, 7, 1),
        -- Quiz 2: Installing Git (Answers)
('In space', false, 3, 1),
('At a command center', false, 3, 1),
('only stores code', true, 4, 1),
('writes your code for you', false, 4, 1),
('debugs your code', false, 4, 1),
('Git is the most popular choice for version control for developers today', true, 5, 1),
('Git cures boredom', false, 5, 1),
('Git can crash our computers and cause major problems', false, 5, 1),
         -- Quiz 3: GitHub Setup (Answers)
('',true, 1),
('',true, 1),
('',true, 1),
('',true, 1),
('',true, 1),
('',true, 1),
('',true, 1),
('',true, 1),
         -- Quiz 4: Creating Repo (Answers)
('', ),
('', ),
('', ),
('', ),
        -- Quiz 5: Git Intro (Answers)
('', ),
('', ),
('', ),
('', ),
('', ),
('', ),
       -- Quiz 6: Git Basics (Answers)
('', ),
('', ),
('', ),
('', ),
('', ),
('', );

-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);





