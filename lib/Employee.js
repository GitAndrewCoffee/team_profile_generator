const inquirer = require("inquirer")

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
}

module.exports = Employee;