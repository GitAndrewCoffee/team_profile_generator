const Manager = require('../lib/Manager.js');


test('creates a Manager object', () => {

    const testName = 'Kinseer Putabit';
    const testID = "8812KP0220";
    const testEmail = "kinseer.putabit@kipperglyph.com";
    const testOfficeNumber = "89MA01"

    const manager = new Manager(testName, testID, testEmail, testOfficeNumber);
  
    expect(manager.name).toEqual(testName);
    expect(manager.id).toEqual(testID);
    expect(manager.email).toEqual(testEmail);
    expect(manager.officeNumber).toEqual(testOfficeNumber);
    expect(manager.role).toEqual("Manager")
    
    expect(manager.getName()).toEqual(testName);
    expect(manager.getID()).toEqual(testID);
    expect(manager.getEmail()).toEqual(testEmail);
    expect(manager.getOfficeNumber()).toEqual(testOfficeNumber);
    expect(manager.getRole()).toEqual("Manager")

    
  });