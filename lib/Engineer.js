const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Engineer extends Employee {
    constructor (newName, newID, newEmail, newGithub) {
        super(newName, newID, newEmail);
        this.github = newGithub;
        this.prompts = super.getPrompts()
        this.prompts.push( { type : 'input',
                                name : "eGithub",
                                message : `Please enter the new ${this.role}'s Github`} );                
    }

    role = "Engineer"

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;