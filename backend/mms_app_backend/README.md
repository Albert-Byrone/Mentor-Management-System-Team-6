# Mentor-Management-System

Mentors Management system is a people management app that enables proper.
coordination of mentors needed to execute projects, ranging from recruitment to off-boarding. Ensure to go through the
app doc below to read more and follow all the instructions.

[Contributor's wiki](https://github.com/ALCOpenSource/Mentor-Management-System-Team-6/wiki)

## Techonologies

    * Frontend: ReactJS, Redux, Redux Toolkit, Tailwind css.
    * Backend: FAST API, Sqlalchemy.
    * Database: PostgreSQL
    * DevOps: Github actions, AWS, docker,AWS Amplify
    * Cloud: AWS Amplify, Elastic Beanstalk, RDS Postgres.

## How to contributing to this project

To get it up and running on your local machine, follow the steps below:

    1. Fork & Clone the repo with the command `git clone

    2. Indicate your interest to work on any issue. "eg. I want to work on this issue or I am interested in this issue"

    3. Open a feature branch from the 'develop' branch. eg feat/

    4. Make sure the name is descriptive for your branch but not too long. Lead with what the the branch is doing eg new feature or bug but follow this pattern `type/branch-description` eg `feature/add-login-functionality.

    5. Ensure your branch is up to date with latest changes before pushing.

    6. Create a pull request against develop branch.

    7. Reference the issue you worked on in your PR.

    8. Open a pull request against the develop branch and request a review from your.

### Frontend

    * Navigate to the project directory with the command `cd Mentor-Management-System-Team-1`

    * Navigate to the frontend directory with the command `cd frontend`

    * Navigate to the frontend directory with the command `cd frontend mms-Admin`

    * Install all the dependencies with the command `npm install`

    * Start the app with the command `npm run dev`

    * Navigate to the app on your browser with the url `http://localhost:****` where **** is the port number displayed on
    your terminal.

# Backend

## Setup

### Change into  project base directory from the command line or id

#### Commandline commands

##### Powershell commands
    

    cd .\backend\mms_app_backend\


##### Bash Commands
    

    cd ./backend/mms_app_backend/


## Install Python requirements and dependencies

# Commandline commands


    pip install -r requirements.txt
### Database setup
    cd ./backend/mms_app_backend/mms_app_backend/configs

### create database based on model revisions
    alembic upgrade head 

## Environment variables

### Create a .env file in the current directory with the following data format

e.g

    
    DATABASE_TYPE=postgresql
    DATABASE_NAME=mms_database
    DATABASE_HOST=localhost
    DATABASE_USERNAME=postgres
    DATABASE_PASSWORD=admin


## Start Server

### Commandline commands


    python main.py


To interact with the server locally, open the [link](http://127.0.0.1:8000) or paste http://127.0.0.1:8000
or http://localhost:8000
in the browser.

## Test


    pytest 


This will return the number of successful and failed tests with percentage clearance.

## Design

The design can be
find [here](https://www.figma.com/file/JNZKj3lachPypSOMBOhC1e/MMS-ALC-0pen-Source-Project?node-id=6784%3A7593&t=dnwBBGHPZRxryUnJ-0)
Find the
Prototype [here](https://www.figma.com/proto/JNZKj3lachPypSOMBOhC1e/MMS-ALC-0pen-Source-Project?page-id=6782%3A4428&node-id=6784%3A6712&viewport=565%2C382%2C0.02&scaling=min-zoom&starting-point-node-id=6784%3A6712)
Work on your Team assigned task e.g Team 1, Team 2 etc.

NOTE: Strictly adhere to the style guide on the design, buttons, texts etc.

## Creating issue

Raise any identified issue with your mentor.

## Other commands available

    1. `npm run build` - Builds the app for production to the `dist` folder.
    2. `npm run lint` - Lints the codebase.
    3. `npm run lint:fix` - Lints the codebase and fixes auto-fixable error.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/098d739ea9504dadabbcc4898eaff86e)](https://app.codacy.com/gh/ALCOpenSource/Mentor-Management-System-Team-1/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
