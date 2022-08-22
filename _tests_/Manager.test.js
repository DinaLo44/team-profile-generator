const Manager = require('../lib/Manager');
const manager = new Manager('Dina', '1111', 'dinalo.brady@gmail.com', '485');

test('this is testing if the values for each property in the costructor is added to create a new manager object', () => {
    expect(manager.name).toBe('Dina');
    expect(manager.id).toBe('1111');
    expect(manager.email).toBe('dinalo.brady@gmail.com');
    expect(manager.officeNumber).toBe('485');
}
);

test('this is testing if the getName method works and actually gets the name of the manager', () => {
    expect(manager.getName()).toBe('Dina');
}
);

test('this is testing if the getId method works and actually gets the managers id', () => {
    expect(manager.getId()).toBe('1111');
}
);

test('this is testing of the getEmail method actually gets the managers email', () => {
    expect(manager.getEmail()).toBe('dinalo.brady@gmail.com');
}
);

test('this is testing if the getOfficeNumber method actually gets the managers office number', () => {
    expect(manager.getOfficeNumber()).toBe('485');
})

test('this is testing if the getRole method does capture the managers role in the organization', () => {
    expect(manager.getRole()).toBe('Manager');
}
);