import inquirer from "inquirer";
import fs from "fs/promises";


let { title, description, toc, installation, usage, license, contribute, tests, username, email, contact } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter the title of your project.",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a short description of your project.",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Write instruction for installation of your project, if applicable.",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Write instruction on how to use this product.",
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose a license.",
            choices: ['Apache 2.0 License',
                'Eclipse Public License 1.0',
                'MIT',
                'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: "Let other developers know how to contribute.",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Explain how to run tests for your application."
        },
        {
            type: 'input',
            name: 'username',
            message: "Enter your Github username.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address.",
        },
        {
            type: 'input',
            name: 'contact',
            message: "Please provide instruction on how to reach you for questions regarding your application.",
        }
    ])

let template =
    `# ${title}
${generateLicense(license)}

## Description
${description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}


## Usage
${usage}


## License
This application is covered under the ${license} license.

${generateLicense(license)}


## Contributing
${contribute}


## Tests
${tests}


## Questions
https://github.com/${username}

${email}

${contact}`;



fs.writeFile("README.md", template);

function generateLicense(license) {
    switch (license) {
        case 'Apache 2.0 License':
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'Eclipse Public License 1.0':
            return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'Mozilla Public License 2.0':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }
}