
//importing inquirer and fs for the javascript files - already installed using node

import inquirer from 'inquirer';
import fs from 'fs';
//importing function from 2nd javascript document
import { generateMarkdown } from './utils/generateMarkdown.js';


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
        //validation to ensure input  by user
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},
    },
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'fullName',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},
    },
    {
        type: 'input',
        message: 'Write a description of your project? What is the purpose of your project?',
        name: 'description',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'Have you faced any challenges in development and how have you overcome these?',
        name: 'challenges',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'What features do you hope to implement in the future?',
        name: 'future',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },

    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'How do you use your project? (instructions)',
        name: 'Usage',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'list', //lists the choices
        message: 'What license does your project use?',
        name: 'license',
        choices: ['MIT', 'apache 2.0', 'creative commons', 'none'],

    },
    {
        type: 'input',
        message: 'Who are your collaborators and contributors?',
        name: 'credits',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contributions',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'Have you conducted any tests on the application?',
        name: 'tests',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'What is your Github Username URL?',
        name: 'username',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'What is the URL of this repo?',
        name: 'profile',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions',
        validate: (value)=> {if(value){return true}else{return "Please input your response."}},

    },
];


// function to initialize program and write the README file
function init() {

    inquirer.prompt(questions)

        .then((response) => {
            console.log(response);

            const markdownTemplate = generateMarkdown(response);
            //const markdownBadges = createBadges(response);

            fs.writeFile(`README.md`,  markdownTemplate, (error) =>
                error ? console.error(error) : console.log(`Check your README file. Your file should be finished.`)
            );   
        });

}

// function call to initialize program
init();


