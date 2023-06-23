// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{

    type:   'checkbox',
    name:   'type',
    message: 'Please confirm you are creating a README file by selecting it below.',
    choices: ['README'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select README.');
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
    message: 'Please explain what your application does and what your motivation was in creating this application.',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please explain what your application was created for and your motivation for creating it.');
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
    message: 'Please list any features you would like to highlight. ',
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
    message: 'Please list any steps or prerequisites needed in order to use this application. (git, node, inquirer, etc.',
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please enter a any software or extensions that are required for this application.');
            return false;
        }
    }
},
{ //checkbox that allows application choice
    type: 'checkbox',
    name: 'applications',
    message: 'Please choose what applications were used.',
    choices: ['CSS\n','HTML\n','JavaScript\n','Node.js\n'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select applications used to create your project.');
            return false;
        }
    }
},
{ //checkbox that allows license choice
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU General Public\n','Mozilla Public License\n',        'Apache License 2.0\n','MIT License\n','Creative Commons License\n','BSD Zero Clause License\n','None'],
    validate: textInput => {
        if (textInput) {
            return true;
        } else {
            console.log('Please select any license used.');
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
