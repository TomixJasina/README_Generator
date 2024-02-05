// function to generate a markdown string based on user's answers
function generateMarkdown(userResponses) {
  return `
  # ${userResponses.title}

  ![Badge for GitHub repo license](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  

  ## Table of contents:

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description 
  
  ${userResponses.description}

  ## Installation
  
  ${userResponses.installation}
  
  ## Usage 
  
  ${userResponses.usage}
   
  ## Contributing
  
  ${userResponses.contributing}
 
  ## Tests
  
  ${userResponses.tests}
  
  ## License
  
  This project is licensed under the ${userResponses.license}.

  ## Questions?
  
  If you have any questions about this project, feel free to reach out to me at:

  GitHub: [@${userResponses.username}](https://github.com/${userResponses.username})

  Email: ${userResponses.email}
  `;
};

module.exports = generateMarkdown;
