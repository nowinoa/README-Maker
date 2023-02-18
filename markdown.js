//renders the license image/icon
function renderLicense (license) {
  if (license != "none") {
    return `![this was a badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}
//If there is a license selected then add the license link to the table of contents
function linkToLicense (license) {
    if(license != 'none') return `[License](#license)`
}
//If there is a license selected then add the license section to the readme
function renderLicenseSection (license) {
    if (license != 'none') {
        return `
## License
This project is Licensed under ${license}
        `
    }

}
//List of images to display the icons on programming languages section
const imageMap = {
    es6: '<img src="https://github.com/get-icon/geticon/raw/master/icons/es6.svg" alt="ECMAScript 6" width="30px" height="30px">',
    javascript: '<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="30px" height="30px">',
    html: '<img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="30px" height="30px">',
    css: '<img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="30px" height="30px">',
    react: '<img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="30px" height="30px">',
    bootstrap: '<img src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg" alt="Bootstrap" width="30px" height="30px">',
    jQuery: '<img src="https://github.com/get-icon/geticon/raw/master/icons/jquery-icon.svg" alt="jQuery" width="30px" height="30px">',
    node: '<img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="30px" height="30px">',
    npm: '<img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="30px" height="30px">',
    git: '<img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" width="30px" height="30px">',
    typescript: '<img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="30px" height="30px">'
  };
//Check which programming language has been selected, transforms it into an image (from below) and pushes it to an empty array that we will later return using join to remove commas and add spaces between icons
function iconProgrammingLanguages(languages) { 
    let lang = [];
    for (let i = 0; i < languages.length; i++) {
        const value = languages[i];
        const image = imageMap[value];
        lang.push(image);
      }
      return lang.join('  ');
}
//Readme template
function markdownMaker (data) {
    return `
${renderLicense(data.license)}
# ${data.title}

## Table of Contents
* [Description](#description)
* [installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* ${linkToLicense(data.license)}

## Programming Languages
${iconProgrammingLanguages(data.programming)}

## Description
${data.description}

#
# Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contributors}

${renderLicenseSection(data.license)}
`}

//exports the markdown maker function so we can use it in other modules
module.exports = markdownMaker;