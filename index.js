const inquirer = require('inquirer');
const fs = require('fs');
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
        console.log(res)
        const readme = `<
                # ${res.title}\n
                ## Description\n
                ${res.description}\n
                ## Contributors\n
                ${res.contributors}>`;
        fs.writeFile('README.md', readme , (err) => err ? console.log(err) : console.log('Saved!'));
    })

