const inquirer = require( "inquirer" );

class Employee {
    constructor (newName, newID, newEmail) {
        this.name = newName;
        this.id = newID;
        this.email = newEmail;
        this.role = "Employee"
    }

    getName() {
        return this.name;
    }
    
    getID() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return this.role;
    }

    newPrompt() {
        inquirer.prompt([nameQ, idQ, emailQ])
        .then (function(data) {
            return new Employee (data.eName, data.eID, data.eEmail);
        });

    }

    nameQ = {
        type : Input,
        name : eName,
        message : `Please enter the new ${this.role}'s name`,
        validate: eNameInput => {
            if (eName.length > 0) {
                return true
            } else {
                console.log("error getting employee name");
                return false;
            }
        },
    }

    idQ = {
        type : Input,
        name : eID,
        message : `Please enter the new ${this.role}'s employee ID`,
        validate: eIDInput => {
            if (eid.length > 0) {
                return true
            } else {
                console.log("error getting employee name");
                return false;
            }
        },

    }

    emailQ = {
        type : Input,
        name : eEmail,
        message : `Please enter the new ${this.role}'s email address`,
        validate: eEmailInput => {
            if (eEmail.length > 0) {
                return true
            } else {
                console.log("error getting employee name");
                return false;
            }
        },

    }
}

module.exports = Employee;