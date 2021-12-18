//
// Global Variables
//

//libraries
const inquirer = require( "inquirer" );
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

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
                //do nothing and end the program
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

//
//  Application Start
//

startHere();