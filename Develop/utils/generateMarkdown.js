// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !== 'none') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== 'none') {
  return `
 
  The application is covered under the following license:

  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  
  ## Table of Contents
  1. [Description](#description)
  2. [Usage](#usage)
  3. [Features](#features)
  4. [Prerequisites](#prerequisites)
  5. [Applications Used](#applications-used)  
  6. [Screenshots](#screenshots)
  7. [Collaborators](#collaborators)
  8. [Links](#links)
  9. [License](#license)


  ## Description
  ${data.description}


  ## Usage
  ${data.usage}


  ## Features
  ${data.features}


  ## Prerequisites
  ${data.prerequisites}


  ## Applications Used
  ${data.applications}  

  
  ## Tests
  To run tests, run the following command:
  ${data.tests}

  ## Screeenshot
  ![alt text](assets/images/screenshot.png)


  ## Collaborators
  ${data.collaborators}


  ## Links:
  If you have any questions you contact me directly at ${data.email}. You can find more of my work at ${data.github}.


  ## Licenses
  This project is licensed under the ${data.license}.`;

}

module.exports = generateMarkdown;
