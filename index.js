


import inquirer from 'inquirer';
import fs from 'fs';
//import path from 'path';

import {generateMarkdown} from '/utils/generateMarkdown.js';

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
    },

    {
        type: 'input',
        message: 'Write a description of your project? What is the purpose of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Have you faced any challenges in development and how have you overcome these?',
        name: 'challenges',
    },
    {
        type: 'input',
        message: 'What features do you hope to implement in the future?',
        name: 'future',
    },

    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your project? (instructions)',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ['MIT', 'apache 2.0', 'creative commons'],
    },
    {
        type: 'input',
        message: 'Who are your collaborators and contributors?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Have you conducted any tests on the application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github Username URL?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the URL of this repo?',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions',
    },
];

// function to write README file
// function writeToFile(response) {


// }

// function to initialize program
function init() {

    inquirer.prompt(questions)

        .then((response) => {
            console.log(response);

            const markdownTemplate = generateMarkdown(response);

            fs.writeFile(`README.md`, markdownTemplate, (error) =>
                error ? console.error(error) : console.log(`Check your README file. Your file should be finished.`)
            );

        });

}

// function call to initialize program
init();
