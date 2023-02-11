const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Ngandala";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 4;
    const employeeInstance = new Employee("Ngandala", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "ngandalalopes@gmail.com";
    const employeeInstance = new Employee("Ngandala", 4, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Ngandala";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 4;
    const employeeInstance = new Employee("Ngandala", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "ngandalalopes@gmail.com";
    const employeeInstance = new Employee("Ngandala", 4, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Ngandala", 4, "ngandalalopes@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
