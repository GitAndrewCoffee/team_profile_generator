const Employee = require("./lib/Employee.js")
const inquirer = require( "inquirer" );

var myEmp = Employee.newPrompt();
console.log(myEmp);