const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Intern extends Employee {
    constructor (newName, newID, newEmail, newSchool) {
        super(newName, newID, newEmail);
        this.school = newSchool;
        console.log(super.getPrompts());
        this.prompts = super.getPrompts()
        this.prompts.push( { type : 'input',
                                name : "eSchool",
                                message : `Please enter the new ${this.role}'s School`} );        
    }

    role = "Intern"

    getSchool() {
        return this.school;
    }
    
}

module.exports = Intern;