const Intern = require('../lib/Intern.js');


test('creates a Intern object', () => {

    const testName = 'Sal Letterfiend';
    const testID = "int20218055";
    const testEmail = "salletterfiend@nuta.edu";
    const testSchool = "Northern University of Technological Advancement"

    const intern = new Intern(testName, testID, testEmail, testSchool);
  
    expect(intern.name).toEqual(testName);
    expect(intern.id).toEqual(testID);
    expect(intern.email).toEqual(testEmail);
    expect(intern.school).toEqual(testSchool);
    expect(intern.role).toEqual("Intern")
    
    expect(intern.getName()).toEqual(testName);
    expect(intern.getID()).toEqual(testID);
    expect(intern.getEmail()).toEqual(testEmail);
    expect(intern.getSchool()).toEqual(testSchool);
    expect(intern.getRole()).toEqual("Intern")

    
  });