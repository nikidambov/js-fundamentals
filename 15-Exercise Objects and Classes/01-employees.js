function employees(input) {
    let employees = {};

    input.forEach(name => {
        let personalNum = Number(name.length);
        employees[name] = personalNum;
    });
    for (let [employeeName, personalNum] of Object.entries(employees)) {
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }


}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);