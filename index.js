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
        default: "My Project"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Are any installations required to run this application?.",
        default: "npm i"
    },
    {
        type: "input",
        name: "useage",
        message: "What is the purpose or uses of this application?",
    },
    {
        type: "input",
        name: "screenshots",
        message: "Enter a github issue generated screenshot link",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone else contribute to this application?",
        default: "* Fork the repo, then create your own branch: `git checkout -b my-idea`" + "<br/>" + "* Commit your changes: `git commit -m Awesome new idea`" + "<br/>" + "* Push to the branch: `git push origin my-idea`" + "<br/>" + "* Submit a pull request!"
    },
    {
        type: "input",
        name: "test",
        message: "Will the user need to perform any tests before using this app?",
        default: "No test required",
    },
    {
        type: "list",
        name: "license",
        message: "If you used a license, what liscense did you use?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Eclipse Public License"] 
    },
    // {
    //     type: "confirm",
    //     name: "deployed",
    //     message: "Do you have a deployed link for this application?",
    //     When: function(answers) {
    //         return answers.deployed;
    //     }
    // },
    {
        type: "input",
        name: "author",
        message: "Who is the author of this application?",
        default: "Merlin Rock"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
        default: "MerlinRock"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "rock.merlin@yahoo.com",
        validate: function (value) {
            let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (mail) {
                return true;
            } else {
                return "Please enter a valid Email address"
            }
        }
    },

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
        // console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    });
    }

// function call to initialize program
init();
