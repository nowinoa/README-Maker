const inquirer = require('inquirer');
const fs = require('fs');
const { json } = require('stream/consumers');
const markdownMaker = require('./markdown');

let title = '';
let description = '';
let contributors = '';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'checkbox',
            message: 'Which programming languages are you using?',
            choices: ['es6' , 'javascript', 'html-5', 'css-3', 'react', 'bootstrap'],
            name: 'programming'
        },
        {
            type: 'input',
            message: 'Could you provide some description about your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Which installation process you need to apply to run this project on other computer?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Write a brief xplanation about how to use this project',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Have this project had any contributor?',
            name: 'contributors'
        },
        {
            type: 'list',
            message: 'Choose your license:',
            choices: ['Apache','GNU','MIT','Mozilla','General Common', 'Eclipse Public', 'none'],
            name: 'license'
        }
    ]).then((res) => {
        //Adds the input responses to the markdown template on the markdown.js and then writes the content on a readme file. If the response doesn't have errors it will say succes, but if it does have, will log the error.
        fs.writeFileSync('README.md', markdownMaker(res), (err) => err ? console.log(err) : console.log('saved!'));
        console.log('saved!');
        console.log(res.programming);
    });
