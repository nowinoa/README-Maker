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
            type: 'input',
            message: 'Could you provide some description about your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Any contributor to this project?',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'Which license are you using?',
            name: 'license'
        }
    ]).then((res) => {
        JSON.stringify(res);
        //Adds the input responses to the markdown template on the markdown.js and then writes the content on a readme file. If the response doesn't have errors it will say succes, but if it does have, will log the error.
        fs.writeFileSync('README.md', markdownMaker(res), (err) => err ? console.log(err) : console.log('Success!!') );
    });
