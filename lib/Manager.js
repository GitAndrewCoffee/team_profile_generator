const Employee = require("./Employee.js")
const inquirer = require( "inquirer" );

class Manager extends Employee {
    constructor (newName, newID, newEmail, newOfficeNumber) {
        super(newName, newID, newEmail);
        this.officeNumber = newOfficeNumber;
        this.role = "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    newPrompt() {
        
    }

}

module.exports = Manager;