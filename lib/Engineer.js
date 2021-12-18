const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Engineer extends Employee {
    constructor (newName, newID, newEmail, newGithub) {
        super(newName, newID, newEmail);
        this.github = newGithub;        
    }

    role = "Engineer"

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;