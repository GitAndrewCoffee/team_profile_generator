const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor (newName, newID, newEmail, newSchool) {
        super(newName, newID, newEmail);
        this.school = newSchool;
        this.role = "Intern"
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;