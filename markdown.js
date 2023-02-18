//
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
    if (license != 'none') return `
    ## License
    This project is Licensed under ${license}`
}
//Readme template
function markdownMaker (data) {
    return `
    
# ${data.title}

## Table of Contents
    * [Description](#description)
    * ${linkToLicense(data.license)}
    * [Installation](#installation)


## Description
    ${data.description}

## Contributors
    ${data.contributors}

${renderLicenseSection(data.license)}
    ${renderLicense(data.license)}
    
    `}

//exports the markdown maker function so we can use it in other modules
module.exports = markdownMaker;