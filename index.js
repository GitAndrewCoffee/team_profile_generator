//
// Global Variables
//

//libraries
const inquirer = require( "inquirer" );
const fs = require( "fs" );
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

//templates
const fileTop = require("./src/top.txt");
const fileBottom = require("./src/bottom.txt");

//lists
var myEmployees = [];

//Prompts

const internC = 'Add Intern';
const engineerC = 'Add Engineer';
const quitC = 'Quit';

const nextStepPrompt = {
    type: 'list',
    name: 'nextStep',
    message: 'What would you like to do?',
    choices: [internC, engineerC, quitC],
  }

//
// Functions
//

function startHere () {
    console.log("startHere is running");
    getEmployee("Manager");
}

function getNextStep() {
    console.log("getNextStep is running");
    inquirer.prompt(nextStepPrompt)
        .then (function (data) {
            console.log(`You chose to ${data.nextStep}`);
            if (data.nextStep == engineerC) {
                getEmployee("Engineer");
            } else if (data.nextStep == internC){
                getEmployee("Intern");
            } else if (data.nextStep == quitC){
                generateFile();
            } else {
                console.log(`${data.nextStep} is an invalid option, please choose again`);
                getNextStep();
            }
        })
}

function getEmployee (empType) {

    if (empType == 'Engineer') {
        console.log("Enter a new Engineer Employee");
        inquirer.prompt (new Engineer().prompts)
            .then (function (data) {

                myEmployees.push(new Engineer(data.eName, data.eID, data.eEmail, data.eGithub)) 

                getNextStep();
            })     

    } else if (empType == 'Intern') {
        console.log("Enter a new Intern Employee");

        inquirer.prompt (new Intern().prompts)
            .then (function (data) {

                myEmployees.push(new Intern(data.eName, data.eID, data.eEmail, data.eSchool)) 

                getNextStep();
            })     

    } else if (empType == 'Manager') {
        console.log("Enter a new Manager Employee");
        inquirer.prompt (new Manager().prompts)
        .then (function (data) {

            myEmployees.push(new Manager(data.eName, data.eID, data.eEmail, data.eSchool)) 

            getNextStep();
        })     

    } else {
        console.log('Invalid empType passed to getEmployee: ' + empType)
    }
}

function generateFile () {
    console.log('generateFile is running');

    //Add file start template
    fs.writeFile("./dist/myteam.html", fileTop);

    //Add Cards
    myEmployees.forEach(function(element){
        
        fs.appendFile("./dist/myteam.html", buildCard(element.role, element.name, element.id, element.email, element.github));
        
    });

    //Add file end template
    fs.appendFile("./dist/myteam.html", fileBottom);
}

function buildCard(role, name, id, email, fourth) {
    let fourthRow = buildFourth(role, fourth);

    let cardText = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <div class="card-title"><h2>${name}</h2> <br> <h3>${role}</h3></div>              
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
    <li class="list-group-item">${fourthRow}</li>
    </ul>
    </div>
    `
    return cardText;

}

function fourthRow(role, fourth) {
    if (role == "Manager"){

        return `Office: ${fourth}`;

    } else if (role == "Engineer") {

        return `Github: <a href="https://github.com/${fourth}">${fourth}</a>`;

    } else if (role == "Intern") {
        
        return `School: ${fourth}`;

    }
}

//
//  Application Start
//

startHere();