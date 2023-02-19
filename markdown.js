//renders the license image/icon
function renderLicense(license) {
  if (license != "none") {
    return `![this was a badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}
//If there is a license selected then add the license link to the table of contents
function linkToLicense(license) {
  if (license != "none") {
    return `* [License](#license)`;
  } else {
    return "";
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
//When the user provides a url to the page, it loads some icons with a link to the project
function linkToProject(link) {
  if (link !== "") {
    return `
:point_right:  ${link}  :point_left:
`;
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

## Table of Contents
* [Tools](#tools)
* [Description](#description)
* [installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${linkToLicense(data.license)}

## Tools
${iconProgrammingLanguages(data.programming)}

## Description
${data.description}
${linkToProject(data.linkProject)}
${renderImage(data.linkPic)}


# Installation
${data.installation}

## Usage
${data.usage}

## Credits
${collaboration(data.contributors, data.github, data.name)}

${renderLicenseSection(data.license)}

## More Projects
Discover my skills and experience - explore my GitHub profile for more https://github.com/${data.github} :computer:
`;
}
//exports the markdown maker function so we can use it in other modules
module.exports = markdownMaker;

//TODO:
//prepare the content that you will paste on the video - your readme content
