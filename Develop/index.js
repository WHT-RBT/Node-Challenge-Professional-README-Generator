// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{

    type:   'checkbox',
    name:   'type',
    message: 'Would you like to generate your README file?',
    choices: ['YourREADME'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select YourREADME.');
            return false;
        }
    }
},
{
    type:   'input',
    name: 'title',
    message: 'What is the title of your README file?',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please title your README file');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please give a summary of what your application does and what your motivation was in creating this application.',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please give a summary of what your application does and what your motivation was in creating this application');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions on how to use this application. **Please be descriptive and add images later in your README file**',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please enter instructions on how to use this application. Adding images later');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'features',
    message: 'Please list any features you would like to highlight for this project. ',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please list any features you would like to highlight for this project.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'prerequisites',
    message: 'Please list any steps or prerequisites needed in order to use this application. (git, node, inquirer, etc.)',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please list any steps or prerequisites needed in order to use this application (git, node, inquirer, etc.)');
            return false;
        }
    }
},

{ //checkbox that allows selection for technologies used in application
    type: 'checkbox',
    name: 'applications',
    message: 'Please choose what applications were used.',
    choices: [
        '-CSS\n', 
        '-HTML\n', 
        '-Handlebars\n', 
        '-JavaScript\n', 
        '-Node.js\n', 
        '-JSON\n', 
        '-Dotenv\n', 
        '-SQL\n', 
        '-MySQL2\n', 
        '-Sequelize\n', 
        '-MongoDB\n', 
        '-Mongoose\n'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select the applications used to create this project.');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'tests',
    message: 'What command should be run for testing?',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please list your test commands.');
            return false;
        }
    }
},

{ //checkbox that allows license choice
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU General Public\n','Mozilla Public License\n','Apache License 2.0\n','MIT License\n','Creative Commons License\n','BSD Zero Clause License\n','None'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select a license used.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'collaborators',
    message: 'Please list any collaborators, if any, with links to their GitHub profiles.',
    validate: textInput => {
        if (textInput) {
            return true;
            }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username and link? (Required)',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please paste your GitHub username and link');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please enter your email address');
            return false;
        }
    }
}]; //end of questions array


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Success! README data written to ${fileName}.md.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response.type, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
