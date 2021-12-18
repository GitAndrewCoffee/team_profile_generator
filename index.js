const Employee = require("./lib/Employee.js")
const inquirer = require( "inquirer" );

var myEmp = new Employee().newPrompt();
console.log(myEmp);