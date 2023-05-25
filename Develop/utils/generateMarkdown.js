// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=="NONE"){
    return `![license](https://img.shields.io/badge/license-${license}-yellow)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=="NONE"){
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="NONE"){
    return `## License
    
This Project Is Licensed By The ${license} License.`

  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation

To install dependencies run the following command: 
\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Test

To run test run the following command:
\`\`\`
${data.test}
\`\`\`

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;
