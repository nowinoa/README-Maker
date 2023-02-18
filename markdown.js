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
//Check which programming language has been selected and adds an icon on its place
function iconProgrammingLanguages(languages) {
    for (let i =0; i < languages.length; i++) {
        return `
        <a href="https://developer.mozilla.org/en-US/docs/Web/${languages[i]}" title="${languages[i]}"><img src="https://github.com/get-icon/geticon/raw/master/icons/${languages[i]}.svg" alt="${languages[i]}" width="21px" height="21px"></a>`
    }
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