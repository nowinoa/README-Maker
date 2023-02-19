const inquirer = require('inquirer');
const fs = require('fs');
const markdownMaker = require('./markdown');
//inputs the questions on the terminal
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hello, and welcome to the ultimate readme maker. Can I get your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'checkbox',
            message: 'Which programming tools are you using?',
            choices: ['es6' , 'javascript', 'html', 'css', 'react', 'bootstrap', 'jQuery', 'node', 'npm', 'git', 'typescript'],
            name: 'programming'
        },
        {
            type: 'input',
            message: 'Could you provide some description about your project?',
            name: 'description'
        },
        {
            type: 'url',
            message: 'Do you have a link to your project?',
            name: 'linkProject'
        },
        {
            type: 'url',
            message: 'Do you have any link with a picture of your project?',
            name: 'linkPic'
        },
        {
            type: 'input',
            message: 'Which installation process you need to apply to run this project on other computer?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Write a explanation about how to use this project',
            name: 'usage'
        },
        {
            type: 'url',
            message: 'Do you have any explanatory video link?',
            name: 'video'
        },
        {
            type: 'input',
            message: 'List your contributors name (Sara Smith, Mark Denver...) or print "none"',
            name: 'contributors'
        },
        {
            type: 'list',
            message: 'Choose your license:',
            choices: ['Apache','GNU','MIT','Mozilla','General Common', 'Eclipse Public', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Have you used any test on your app?',
            name: 'test'
        },
        {
            type: 'email',
            message: 'Please provide your email adress for the questions section',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Finally, provide your github username',
            name: 'github'
        }
    ]).then((res) => {
        //Adds the input responses to the markdown template on the markdown.js and then writes the content on a readme file. If the response doesn't have errors it will say succes, but if it does have, will log the error.
        fs.writeFileSync('README.md', markdownMaker(res), (err) => err ? console.log(err) : console.log('saved!'));
        console.log('saved!');
    });

    