const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Intern extends Employee {
    constructor (newName, newID, newEmail, newSchool) {
        super(newName, newID, newEmail);
        this.school = newSchool;        
    }

    role = "Intern"

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;