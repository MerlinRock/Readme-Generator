// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

    ### Liscense
    \n ${data.license}
    \n ## Table of Contents
    \n- [Description](#Description)
    \n- [Installation](#Installation)
    \n- [Usage](#Usage)
    \n- [Contributors](#Contributors)
    \n- [Test](#Test)
    \n- [Contact](#Contact)

    \n ## Description

    \n ${data.description}

    \n ## Installation

    \n ${data.installation}

    \n ## Usage

    \n ${data.useage}

    \n ### Screen Shots
      
    \n ## Contributors

    \n ${data.contributing}

    \n ## Tests

    \n${data.test}

    \n ## Contact

    * [${data.github} GitHub account](https://github.com/${data.github})

    * [${data.email}]




  `;
}

module.exports = generateMarkdown;