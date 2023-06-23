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

  ## Licenses
  ${data.license}

  ## Collaborators
  ${data.collaborators}

  ## Please contact me using the following link:
  ${data.github}`;

}

module.exports = generateMarkdown;
