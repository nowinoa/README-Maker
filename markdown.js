//After installing moment (npm install moment) we need to require it - then we will use it to add the year on the readme file
const moment = require('moment');
//Renders the license image/icon
function renderLicense(license) {
  if (license != "none") {
    return `![this was a badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}
//Checks if the user specified a license and a test
function renderTableOfContent(license, test) {
  if (license != "none" && test !== '') {
    return `* [License](#license)
* [Tests](#tests)`;
  } else if (license !== 'none') {
    return '* [License](#license)';
  } else if (test !== '') {
    return '* [Tests](#tests)';
  } else {
    return '';
  }
}
//If there is a license selected then add the license section to the readme
function renderLicenseSection(license) {
  if (license != "none") {
    return `
## License
This project is under ${license} license
        `;
  } else if (license == "none") {
    return "";
  }
}
//Renders the tests section
function renderTestsSection(test) {
  if(test) {
   return `## Tests
${test}`
  } else {
    return ''
  }
}
//When the user provides a url to the page, it loads some icons with a link to the project
function projectLink(link) {
  if (link !== "") {
    return `:point_right:  ${link}  :point_left:`;
  } else {
    return ''
  }
}
//When the user provides a url to a video, it loads some icons with a link to the video
function videoLink(video) {
  if (video !== "") {
    return `:point_right:  ${video}  :point_left:`;
  } else {
    return ''
  }
}
//When the user provides a url it will add an image to the readme
function renderImage(src) {
  if (src !== "") {
    return `<img src="${src}">`;
  } else {
    return "";
  }
}
//When the user collaborated with someone else this will print the names
//When the users types none to the collaborators questions, this will type the owners name on an anchor tag linked to the github profile
function collaboration(coll, username, name) {
  if (coll !== "none") {
    return `This is a collaborative project by ${coll}`;
  } else {
    return `Created by <a href="https://github.com/${username}">${name}</a>`;
  }
}
//List of images to display the icons on programming languages section
const imageMap = {
  es6: '<img src="https://github.com/get-icon/geticon/raw/master/icons/es6.svg" alt="ECMAScript 6" width="30px" height="30px">',
  javascript:
    '<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="30px" height="30px">',
  html: '<img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="30px" height="30px">',
  css: '<img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="30px" height="30px">',
  react:
    '<img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="30px" height="30px">',
  bootstrap:
    '<img src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg" alt="Bootstrap" width="30px" height="30px">',
  jQuery:
    '<img src="https://github.com/get-icon/geticon/raw/master/icons/jquery-icon.svg" alt="jQuery" width="30px" height="30px">',
  node: '<img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="30px" height="30px">',
  npm: '<img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="30px" height="30px">',
  git: '<img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" width="30px" height="30px">',
  typescript:
    '<img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="30px" height="30px">',
};
//Check which programming language has been selected, transforms it into an image (from below) and pushes it to an empty array that we will later return using join to remove commas and add spaces between icons
function iconProgrammingLanguages(languages) {
  let lang = [];
  for (let i = 0; i < languages.length; i++) {
    const value = languages[i];
    const image = imageMap[value];
    lang.push(image);
  }
  return lang.join("  ");
}
//Readme template
function markdownMaker(data) {
return `${renderLicense(data.license)}
# ${data.title}

## Description
${data.description}

${renderImage(data.linkPic)}

${projectLink(data.linkProject)}

## Table of Contents
* [Tools](#tools)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderTableOfContent(data.license, data.test)}
* [Questions](#questions)

## Tools
${iconProgrammingLanguages(data.programming)}

## Installation
${data.installation}

## Usage
${data.usage}

${videoLink(data.video)}

## Credits
${collaboration(data.contributors, data.github, data.name)}

${renderLicenseSection(data.license)}

${renderTestsSection(data.test)}

## Questions
For any questions or issues feel free to contact me at: ${data.email}

To explore more about my projects visit my profile :point_right: <a href="https://github.com/${data.github}">:computer:</a>

© ${moment().format('YYYY')} ${data.name}. Confidential and Proprietary. All Rights Reserved.
`;
}
//exports the markdown maker function so we can use it in other modules
module.exports = markdownMaker;

//TODO:
//1. 
    //film a video
    //if existing url then return link with icons 
    //if not ''
//Rewrite the questions in a proper way
//Prepare the readme content in notes
//Upload a picture to somewhere where you can get the url - of the project
//Film and add the video link to the Readme
