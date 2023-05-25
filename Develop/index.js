// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer")
const path = require ("path")
const generateMarkdown = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What license does your project have?',
        name: 'license',
        choices: [
            "MIT", "Apache", "GPL", "BSD", "NONE"
        ]
      },
      {
        type: 'input',
        message: 'How does someone install dependencies?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How does someone run tests?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What are the usage guidelines for this project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can someone contribute to this projects?',
        name: 'contribute',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses)=>{
    console.log("generating your read me")
    writeToFile("README.md",generateMarkdown({...responses}))
  })
}

// Function call to initialize app
init();


writeToFile();