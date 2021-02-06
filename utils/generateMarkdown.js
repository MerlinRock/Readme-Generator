// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  \n ## Liscense
  \n<span style="color: orange;">${data.license}</span>
  \n &nbsp;
  \n
  \n ## Table of Contents
  \n- [Description](#Description)
  \n- [Installation](#Installation)
  \n- [Usage](#Usage)
  \n- [Screen Shots](#ScreenShots)
  \n- [Contributing](#Contributing)
  \n- [Test](#Tests)
  \n- [Author](#Author)
  \n- [Contact](#Contact)
  ***
  \n ## Description
  \n<span style="color: orange;">${data.description}</span>
  \n &nbsp;
  \n
  \n ## Installation
  \n<span style="color: orange;">${data.installation}</span>
  \n &nbsp;
  \n
  \n ## Usage
  \n<span style="color: orange;">${data.useage}</span>
  \n &nbsp;
  \n
  \n ## ScreenShots
  \n${data.screenshots}
  \n &nbsp;
  \n
  \n ## Contributing
  \n<span style="color: orange;">${data.contributing}</span>
  \n &nbsp;
  \n
  \n ## Tests
  \n<span style="color: orange;">${data.test}</span>
  \n &nbsp;
  \n
  \n ## Author
  \n[${data.author}](https://merlinrock.github.io/ResponsivePortfolio/)
  \n &nbsp;
  \n 
  \n ## Contact
  [${data.author + "'s"} gitHub profile](https://github.com/${data.github})

  <${data.email}>

  `;
}

module.exports = generateMarkdown;