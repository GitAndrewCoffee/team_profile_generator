const Employee = require('../lib/Employee.js');


test('creates a Employee object', () => {

    const testName = 'Elbrith Matomodo';
    const testID = "6785EM01";
    const testEmail = "elbrith.matomodo@kipperglyph.com";

    const employee = new Employee(testName, testID, testEmail);
  
    expect(employee.name).toEqual(testName);
    expect(employee.id).toEqual(testID);
    expect(employee.email).toEqual(testEmail);
    expect(employee.role).toEqual("Employee")
    
    expect(employee.getName()).toEqual(testName);
    expect(employee.getID()).toEqual(testID);
    expect(employee.getEmail()).toEqual(testEmail);
    expect(employee.getRole()).toEqual("Employee")

    
  });