// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

    ### Liscense

    ${data.license}
  
    ## Table of Contents

    -[Description](#description)






  `;
}

module.exports = generateMarkdown;