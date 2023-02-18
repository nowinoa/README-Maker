function renderLicense (license) {
  if (license != "none") {
    return `![this was a badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}
function linkToLicense (license) {
    if(license != 'none') return `[License](#license)`
}
function renderLicenseSection (license) {
    if (license != 'none') return `
    ## License
    This project is Licensed under ${license}`
}
function markdownMaker (data) {
    return `# ${data.title}
    
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

module.exports = markdownMaker;