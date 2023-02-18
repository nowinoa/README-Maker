//Icons


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
const imageMap = {
    es6: '<img src="https://github.com/get-icon/geticon/raw/master/icons/es6.svg" alt="ECMAScript 6" width="30px" height="30px">',
    javascript: '<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="30px" height="30px">',
    html: '<img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="30px" height="30px">',
    css: '<img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="30px" height="30px">',
    react: '<img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="30px" height="30px">'
  };
//Check which programming language has been selected and adds an icon on its place
function iconProgrammingLanguages(languages) { 
    let lang = [];
    for (let i = 0; i < languages.length; i++) {
        const value = languages[i];
        const image = imageMap[value];
        lang.push(image + '&nbsp');
      }
      return lang.join('');
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

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contributors}

${renderLicenseSection(data.license)}
`}

//exports the markdown maker function so we can use it in other modules
module.exports = markdownMaker;