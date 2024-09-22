// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let licenseUrl = '';
  switch(license) {
    case 'MIT':
      licenseUrl = 'MIT';
      break;
    case 'GNU GPLv3':
      licenseUrl = 'GPLv3';
      break;
    case 'Apache 2.0':
      licenseUrl = 'apache%202.0';
      break;
    default:
      return licenseUrl = '';
  }
  return `![License](https://img.shields.io/badge/License-${licenseUrl}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license || license === 'None') {
    return '';
  }
  let licenseUrl = '';
  switch(license) {
    case 'MIT':
      licenseUrl = 'mit';
      break;
    case 'GNU GPLv3':
      licenseUrl = 'gpl-3.0';
      break;
    case 'Apache 2.0':
      licenseUrl = 'apache-2.0';
      break;
    default:
      return licenseUrl = '';
  }
  return `https://choosealicense.com/licenses/${licenseUrl}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, please reach out to me at ${data.email}.
  You can also visit my GitHub profile at https://github.com/${data.github}.`;
}

export default generateMarkdown;
