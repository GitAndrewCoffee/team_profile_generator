const Engineer = require('../lib/Engineer.js');


test('creates a Engineer object', () => {

    const testName = 'Jo Gliff';
    const testID = "2213JG5501";
    const testEmail = "josephina.gliff@kipperglyph.com";
    const testGithub = "jgliffhub"

    const engineer = new Engineer(testName, testID, testEmail, testGithub);
  
    expect(engineer.name).toEqual(testName);
    expect(engineer.id).toEqual(testID);
    expect(engineer.email).toEqual(testEmail);
    expect(engineer.github).toEqual(testGithub);
    expect(engineer.role).toEqual("Engineer")
    
    expect(engineer.getName()).toEqual(testName);
    expect(engineer.getID()).toEqual(testID);
    expect(engineer.getEmail()).toEqual(testEmail);
    expect(engineer.getGithub()).toEqual(testGithub);
    expect(engineer.getRole()).toEqual("Engineer")

    
  });