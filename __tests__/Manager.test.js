// Test manager
const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 4;
    const employeeInstance = new Manager("Ngandala", 4, "ngandalalopes@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 4;
    const employeeInstance = new Manager("Ngandala", 4, "ngandalalopes@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Ngandala", 4, "ngandalalopes@gmail.com", 4);
    expect(employeeInstance.getRole()).toBe(returnValue);
});