const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const path = require('path');
// const DIST_DIR = path.resolve(__dirname, "dist")
// const distPath = path.join(DIST_DIR, "index.html")
const teamMembers = [];

const showMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What position would you like to add next?',
            choices: ['add a new Engineer', 'add a new Intern', 'I have finished to add the members of my team'],
            name: 'menu'
        }
    ]).then(userSelection => {
        switch (userSelection.menu) {
            case 'add a new Engineer':
                engineerPrompt();
                break;
            case 'add a new Intern':
                internPrompt();
                break;
            default:
                console.log('I have finished to add the members of my team')

        }
    })
}

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is its Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is its email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is its office number?',
            name: 'officeNumber'
        },
    ]).then((response) => {
        console.log(response);
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager)
        showMenu();
    }).catch((error) => {
        console.error(error)
        throw error
    })
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is its Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is its email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is its GitHub username?',
            name: 'github'
        },
    ]).then((response) => {
        console.log(response);
        const engineer = new Engineer(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(engineer)
        showMenu();
    }).catch((error) => {
        console.error(error)
        throw error
    })
};

const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is name of the intern?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is its Employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is its email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of the school he/she is currently attending?',
            name: 'school'
        },
    ]).then((response) => {
        console.log(response);
        const intern = new Intern(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(intern)
        showMenu();
    }).catch((error) => {
        console.error(error)
        throw error
    // }).then(function () {
    //     let htmlFile = generateMarkdown(teamMembers);
    //     fs.writeFile('./dist/myteam.html', htmlFile, "utf-8");
    });
}


managerPrompt()




