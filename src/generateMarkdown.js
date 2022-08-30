function generateEmployeeHtml(employees) {
    const employeeHtmlArray = [];

    const createManagerCard = (manager) => {
        let managerHtml =
        `
        <div class="card">
        <div class="card-header">
            ${manager.name} <br>
            Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${manager.id}</li>
            <li class="list-group-item">Email address: <span><a href="mailto:${manager.email}">${manager.email}</a></span>
            </li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    employeeHtmlArray.push(managerHtml);
}
 const createEngineerCard = (engineer) => {
    let engineerHtml = 
    `
    <div class="card">
        <div class="card-header">
            ${engineer.name} <br>
            Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Email address: <span><a href="mailto:${engineer.email}">${engineer.email}</a></span>
            </li>
            <li class="list-group-item">GitHub Username:<a target="_blank" href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
        </ul>
    </div>
    `;
    employeeHtmlArray.push(engineerHtml);
 }

 const createInternCard = (intern) => {
    let internHtml =
    `
    <div class="card">
        <div class="card-header">
            ${intern.name} <br>
            Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${intern.id}</li>
            <li class="list-group-item">Email address: <span><a href="mailto:${intern.email}">${intern.email}</a></span>
            </li>
            <li class="list-group-item">School:${intern.school}</li>
        </ul>
    </div>
    `;
    employeeHtmlArray.push(internHtml);
 }
 
 
 for (let i = 0; i < employees.length; i++) {
    if (employees[i].getRole() === "Manager") {
        createManagerCard(employees[i]);
    }else if (employees[i].getRole() === "Engineer") {
        createEngineerCard(employees[i]);
    }else {
        createInternCard(employees[i]);
    }
}

return employeeHtmlArray.join('');

}



module.exports = employees => {

   return `
   <!doctype html>
   <html lang="en">
   
   <head>
       <title>Team Profile Generator</title>
       <!-- Required meta tags -->
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
       <!-- Bootstrap CSS -->
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <link rel="stylesheet" href="style.css">
       
       
   </head>
   
   <body>
       <header> My Team </header>
   
       <main>${generateEmployeeHtml(employees)}</main>
   
         
</body>
</html>
`
}