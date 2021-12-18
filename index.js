const Employee = require("./lib/Employee.js")
const inquirer = require( "inquirer" );

const myEmp = new Employee().promptNew();
console.log(myEmp);