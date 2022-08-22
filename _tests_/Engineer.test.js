const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Dina', '1111', 'dinalo.brady@gmail.com', 'DinaLo44');

test('this is testing if the values for each property in the costructor is added to create a new engineer object', () => {
    expect(engineer.name).toBe('Dina');
    expect(engineer.id).toBe('1111');
    expect(engineer.email).toBe('dinalo.brady@gmail.com');
    expect(engineer.github).toBe('DinaLo44');
}
);

test('this is testing if the getName method works and actually gets the name of the engineer', () => {
    expect(engineer.getName()).toBe('Dina');
}
);

test('this is testing if the getId method works and actually gets the engineers id', () => {
    expect(engineer.getId()).toBe('1111');
}
);

test('this is testing of the getEmail method actually gets the engineers email', () => {
    expect(engineer.getEmail()).toBe('dinalo.brady@gmail.com');
}
);

test('this is testing if the getOfficeNumber method actually gets the engineers github username', () => {
    expect(engineer.getGitHub()).toBe('DinaLo44');
})

test('this is testing if the getRole method does capture the engineers role in the organization', () => {
    expect(engineer.getRole()).toBe('Engineer');
}
);