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

function getEmployee (empType) {
    console.log("getEmployee is running, empType below:")
    console.log(empType)
    if (empType == 'Engineer') {
        console.log("Engineer path");
        inquirer.prompt (new Engineer().prompts)
            .then (function (data) {
                console.log("inquire data below:")
                console.log(data);
                myEmployees.push(new Engineer(data.eName, data.eID, data.eEmail, data.eGithub)) 
                console.log("meEmployees Array below:")
                console.log(myEmployees);
            })        
    } else if (empType == 'Intern') {
        console.log("Intern path");
        console.log(new Intern().prompts);
        inquirer.prompt (new Intern().prompts)
            .then (function (data) {
                console.log("inquire data below:")
                console.log(data);
                myEmployees.push(new Intern(data.eName, data.eID, data.eEmail, data.eSchool)) 
                console.log("meEmployees Array below:")
                console.log(myEmployees);
            })        
    } else if (empType == 'Manager') {
        console.log("Manager path");
        inquirer.prompt (new Manager().prompts)
        .then (function (data) {
            console.log("inquire data below:")
            console.log(data);
            myEmployees.push(new Manager(data.eName, data.eID, data.eEmail, data.eSchool)) 
            console.log("meEmployees Array below:")
            console.log(myEmployees);
        })        
    } else {
        console.log('Invalid empType passed to getEmployee: ' + empType)
    }
}

// getEmployee("Intern");
// getEmployee("Engineer");
// getEmployee("Manager");
// getEmployee("BadData");

console.log(myEmployees);