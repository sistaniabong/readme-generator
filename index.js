// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./utils/generateMarkdown');

//an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project\'s title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short descrition of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please write an instruction on how to install the project, if any',
        default: 'npm i',
        },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'list',
        name: 'license',
        message: 'WHat kind of license does the project require?',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'BSD',
            'Academic',
            'Mozilla',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who is the contributor(s) of the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write the test guideline, if any',
        default: 'node index'
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateContent.generateMarkdown(data);
    fs.writeFile(fileName,readmeContent,(err) => 
        err ? console.log(err) : console.log('Successfully created index.html!'));
}

// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('./example/README.md',data))
};

// Function call to initialize app
init();
