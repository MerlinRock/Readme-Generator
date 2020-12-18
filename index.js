"use strict";
const fs = require("fs");
const inquire = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What's the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
    },
    {
        type: "confirm",
        name: "installation",
        message: "Are any installations required to run this application?.",
    },
    {
        type: "input",
        name: "useage",
        message: "What is the purpose or uses of this application?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this application?",
    },
    {
        type: "input",
        name: "test",
        message: "Will the user need to perform any tests before using this app?",
        default: "If No click Enter",
    },
    {
        type: "list",
        name: "license",
        message: "If you used a license, what liscense did you use?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Eclipse Public License"] 
    },
    // {
    //     type: "input",
    //     name: "github",
    //     message: "What is your Github username?",
        
    // },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "What is your email?",
        
    // },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated-readme/${fileName}`, data, (err) => {
        err ? console.log(err) :
    console.log("File Written")
    });
}

// function to initialize program
function init() {
    inquire.prompt(questions).then((answers) => {
        console.log(answers)
        let readme = `Project Title: ${answers.projectTitle}, Project License: ${answers.license},
        Description: ${answers.description}, Installation: ${answers.installation}
        
        `
        console.log(readme)
        writeToFile("README.md", generateMarkdown(answers));
    });
    }

// function call to initialize program
init();
