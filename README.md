## GIT / GITHUB:
1)Pubic repository was created in github : https://github.com/nanarkirr/client-management.git 

2) Empty git project was initialized in Angular project: `git init`

3) Remote origin was setup for empty git project :  `git remote add origin https://github.com/nanarkirr/client-management.git`

4) To clone a  project : ‘git clone https://github.com/nanarkirr/client-management.git’

5) To commit/push changes to github :
To add all files new files, changes and removed files: `git add -A`
To save the changes done in the files: `git commit -m "Your message" `
To send your committed changes to a remote repository: `git push -u origin master`

6)Github token used for pushing : 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

7)Github user = nanarkirr email = narack29@gmail.com
	

## Create a project in Jira
A Project named “client-management” is created : https://nynarak-client.atlassian.net/ 

A boad, timeline, backlog is added.

Epics for important modules (client creation, meeting, SQL, UI & UX) were created and user stories are created in them.

A sprint was stared for tasks in-progress.


## Running Angular Project
Note: Node version > 12 must be installed in system to run Angular

1)Clone Angular project from github by command : ` git clone https://github.com/nanarkirr/client-management.git`

2)Change directory to angular folder : `cd angular`

3)Install node modules :  `npm install`

4)Start Angular project: `ng serve`

5)App will be running at: 	`http://localhost:4200`

6) Pages in app are:

http://localhost:4200/#/create-client
http://localhost:4200/#/client-list
http://localhost:4200/#/create-meeting
http://localhost:4200/#/meeting-list


## MySQL
Two SQL files are created for clients and meetings with required fields. (In same directory where angular project)

Run SQL files in SQL command-line, tables will be in database.