const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "NgandalaLopes";
    const employeeInstance = new Engineer("Ngandala", 4, "Ngandalalopes@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "NgandalaLopes";
    const employeeInstance = new Engineer("Ngandala", 4, "Ngandalalopes@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ngandala", 4, "Ngandalalopes@gmail.com", "NgandalaLopes");
    expect(employeeInstance.getRole()).toBe(returnValue);
});