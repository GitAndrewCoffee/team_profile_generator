const inquirer = require( "inquirer" );



class Employee {
    constructor (newName, newID, newEmail) {
        this.name = newName;
        this.id = newID;
        this.email = newEmail;        
    }

    role = 'employee'

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

    promptNew() {
        return inquirer.prompt(this.prompts)
            .then (function(data) {
                console.log(data);
                return new Employee(data.eName, data.eID, data.eEmail)
            }); 
    }

    prompts = [
        {   type : 'input',
            name : "eName",
            message : `Please enter the new ${this.role}'s name`,
        },
        {   type : 'input',
            name : "eID",
            message : `Please enter the new ${this.role}'s employee ID`,        
        },
    
        {   type : 'input',
            name : "eEmail",
            message : `Please enter the new ${this.role}'s email address`,        
        }]

    
}

module.exports = Employee;