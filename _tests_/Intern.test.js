const Intern = require('../lib/Intern');
const intern = new Intern('Dina', '1111', 'dinalo.brady@gmail.com', 'University of Utah');

test('this is testing if the values for each property in the costructor is added to create a new intern object', () => {
    expect(intern.name).toBe('Dina');
    expect(intern.id).toBe('1111');
    expect(intern.email).toBe('dinalo.brady@gmail.com');
    expect(intern.school).toBe('University of Utah');
}
);

test('this is testing if the getName method works and actually gets the name of the intern', () => {
    expect(intern.getName()).toBe('Dina');
}
);

test('this is testing if the getId method works and actually gets the interns id', () => {
    expect(intern.getId()).toBe('1111');
}
);

test('this is testing of the getEmail method actually gets the interns email', () => {
    expect(intern.getEmail()).toBe('dinalo.brady@gmail.com');
}
);

test('this is testing if the getOfficeNumber method actually gets the interns school name', () => {
    expect(intern.getSchool()).toBe('University of Utah');
})

test('this is testing if the getRole method does capture the interns role in the organization', () => {
    expect(intern.getRole()).toBe('Intern');
}
);