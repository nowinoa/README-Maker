const inquirer = require('inquirer');
const fs = require('fs');
const { json } = require('stream/consumers');
const markdown = require('markdown-it');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
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
        }
    ]).then((res) => {
        JSON.stringify(res)
        const readme = `
                # ${res.title}\n
                ## Description\n
                  ${res.description}\n
                ## Contributors\n
                  ${res.contributors}\n`;
        const readmeMd = md.render(readme);
        fs.writeFile('README.md', readmeMd , (err) => err ? console.log(err) : console.log('Saved!'));
    });

//se tiene q escribir en markdown but idk so difficult - keep researching