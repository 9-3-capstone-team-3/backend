\c codefusion_db

/* INSERT INTO status (status_name) 
VALUES
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');
*/ -- Can delete lines 3-6 when cleaning up code!

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
('Linda', false, 1, 1),
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
('Jacob', false, 8, 1),
('Linda', true, 8, 1),
('Both', false, 8, 1),
('Neither', false, 8, 1),
('Watch a tutorial video', false, 9, 1),
('Follow a written guide', false, 9, 1),
('Simulate the setup process within an app', true, 9, 1),
('Ask another colleague for help', false, 9, 1),
('From the terminal', false, 10, 1),
(`Git's official website`, true, 10, 1),
('An app store', false, 10, 1),
('A software CD.', false, 10, 1),
('A registration form', false, 11, 1),
('A user guide', false, 11, 1),
('A download button tailored to her OS', true, 11, 1),
(' A list of Git contributors', false, 11, 1),
('By checking the applications folder.', false, 12, 1),
('By opening a browser', false, 12, 1),
(`By opening a terminal and typing 'git --version'`, true, 12, 1),
('By emailing Git support', false, 12, 1),
('To get a personalized Git theme', false, 13, 1),
('To ensure all Git activities are linked to the user', true, 13, 1),
('To allow for encrypted communication', false, 13, 1),
('To get premium Git features', false, 13, 1),
('Confusion', false, 14, 1),
('Indifference', false, 14, 1),
('Increased Confidence', true, 14, 1),
('Doubt', false, 14, 1),
('Fast internet', false, 15, 1),
('Having a powerful computer', false, 15, 1),
('Understanding Git', true, 15, 1),
('Knowing multiple programming languages', false, 15, 1),
         -- Quiz 3: GitHub Setup (Answers)
('Gabriella', true, 16, 1),
('Ada', false, 16, 1),
('Both', false, 16, 1),
('Neither', false, 16, 1),        
('Complex and time-consuming', false, 17, 1),
('Quite straightforward', true, 17, 1),
(' Only for advanced developers', false, 17, 1),
(`Irrelevant in today's world`, false, 17, 1),
('Watch a tutorial', false, 18, 1),
('Attend a workshop', false, 18, 1),
('Simulate the process in their app', true, 18, 1),
('Postpone it for another day', false, 18, 1),
('AdaCode', false, 19, 1),
('Ada_Dev', true, 19, 1),
('Ada_GitHub', false, 19, 1),
('DeveloperAda', false, 19, 1),
('Sending a friend request', false, 20, 1),
('Selecting programming languages', false, 20, 1),
('Providing an email and choosing a password', true, 20, 1),
('Subscribing to newsletters', false, 20, 1),
('A professional headshot', false, 21, 1),
('The GitHub logo', false, 21, 1),
('A cute cat', true, 21, 1),
('A computer screen', false, 21, 1),
('GitHub newbie here!', false, 22, 1),
('Enthusiastic developer exploring the world of code.', true, 22, 1),
('Ada, the code warrior', false, 22, 1),
('Learning one commit at a time', false, 22, 1),
('She felt it was too complicated', false, 23, 1),
('She decided not to create a GitHub account', false, 23, 1),
('She found the process less daunting and was eager to set up her account', true, 23, 1),
('She felt indifferent about GitHub', false, 23, 1),
         -- Quiz 4: Creating Repo (Answers)
('The brain of a computer', false, 24, 1),
('The foundation of a building', false, 24, 1),  
('The heart of a project when using version control', true, 24, 1),  
('The control center of an operation', false, 24, 1),  
('`git start`', false, 25, 1), 
('`git begin`', false, 25, 1), 
('`git init`', true, 25, 1), 
('`git create`', false, 25, 1), 
('A backup of the project', false, 26, 1), 
('A folder containing user profiles', false, 26, 1),
('Where Git keeps all the tracking information', true, 26, 1), 
('A folder for storing project configurations', false, 26, 1), 
('To beautify the project directory', false, 27, 1),        
('To facilitate team communication', false, 27, 1 ),
('To lay the foundation for tracking changes, adding files, etc', true, 27, 1 ),
(`To increase the project's visibility online`, false, 27, 1),
        -- Quiz 5: Git Intro (Answers)
('A complex algorithm tool',false, 28, 1),         
('A magic quill that writes our coding chronicle', true, 28, 1 ),
('A simple tracking device', false, 28, 1),
('A digital library of code', false, 28, 1),
(`It's a cloud-based tool`, false, 29, 1), 
(`It's a proprietary software`, false, 29, 1), 
(`It's a distributed version control system`, true, 29, 1), 
(`It's focused on individual coders`, false, 29, 1), 
('By creating a new repository', false, 30, 1), 
('By saving them to the cloud', false, 30, 1), 
('By sending emails to each member', false, 30, 1), 
('By committing the changes and letting others pull those updates', true, 30, 1), 
('It overwrites the previous changes', false, 31, 1), 
('It automatically merges the changes', false, 31, 1), 
('It informs about any conflicts', true, 31, 1), 
('It deletes both sets of changes', false, 31, 1), 
('Developers work in isolation', false, 32, 1), 
(`Developers work in separate 'branches' and merge them later`, true, 32, 1), 
('Developers must seek permission before making any changes', false, 32, 1), 
('Developers must work on different projects', false, 32, 1), 
('Simplifying complex algorithms', false, 33, 1), 
('Keeping the entire team in sync', true, 33, 1),
('Ensuring code security', false, 33, 1),
('Optimizing code performance', false, 33, 1),
       -- Quiz 6: Git Basics (Answers)
('Uploading the code to a server', false, 34, 1), 
('Sending the code to another developer', false, 34, 1), 
('Saving a version of their work', true, 34, 1), 
('Creating a backup of the entire project', false, 34, 1), 
(`'git stage .'`,false, 35, 1), 
(`'git add filename.txt'`,false, 35, 1), 
(`'git commit .'`, false, 35, 1), 
(`'git add .'`, true, 35, 1),  
(`git save -m 'Description'`, false, 36, 1), 
(`git commit -m 'Description'`, true, 36, 1),
(`git update -m 'Description'`, false, 36, 1),
(`git add -m 'Description'`, false, 36, 1), 
('Merge the main codebase', false, 37, 1), 
('Delete the existing project', false, 37, 1),
('Have a separate workspace or copy of the main project', true, 37, 1),
('Track the work of other developers',false, 37, 1),
(`'git create new-feature' followed by 'git access new-feature'`, false, 38, 1), 
(`'git branch new-feature' followed by 'git checkout new-feature'`, true, 38, 1), 
(`'git checkout -b new-feature'`, false, 38, 1), 
(`'git init new-feature'`, false, 38, 1), 
(`'git add new-feature'`, false, 39, 1), 
(`'git save new-feature'`, false, 39, 1), 
(`'git merge new-feature'`, true, 39, 1), 
(`'git commit new-feature'`, false, 39, 1);

-- Insert submission (without question_id)
INSERT INTO submission (user_id, user_answer, is_correct) VALUES
(1, 'A version control system', true);





