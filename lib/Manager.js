const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Manager extends Employee {
    constructor (newName, newID, newEmail, newOfficeNumber) {
        super(newName, newID, newEmail);
        this.officeNumber = newOfficeNumber;
        this.prompts = super.getPrompts()
        this.prompts.push( { type : 'input',
                                name : "eOffice",
                                message : `Please enter the new ${this.role}'s Office Number`} );          
    }

    role = "Manager"

    getOfficeNumber() {
        return this.officeNumber;
    }

    newPrompt() {

    }

}

module.exports = Manager;