const Employee = require('../lib/Employee');
const employee = new Employee('Dina', '1111', 'dinalo.brady@gmail.com');

test('this is testing if the values for each property in the costructor is added to create a new Employee object', () => {
    expect(employee.name).toBe('Dina');
    expect(employee.id).toBe('1111');
    expect(employee.email).toBe('dinalo.brady@gmail.com');
}
);

test('this is testing if the getName method works and actually gets the name of the employee', () => {
    expect(employee.getName()).toBe('Dina');
}
);

test('this is testing if the getId method works and actually gets the employees id', () => {
    expect(employee.getId()).toBe('1111');
}
);

test('this is testing of the getEmail method actually gets the employees email', () => {
    expect(employee.getEmail()).toBe('dinalo.brady@gmail.com');
}
);

test('this is testing if the getRole method does capture the employees role in the organization', () => {
    expect(employee.getRole()).toBe('Employee');
}
);