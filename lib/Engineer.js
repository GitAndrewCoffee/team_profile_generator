const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor (newName, newID, newEmail, newGithub) {
        super(newName, newID, newEmail);
        this.github = newGithub;
        this.role = "Engineer"
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;