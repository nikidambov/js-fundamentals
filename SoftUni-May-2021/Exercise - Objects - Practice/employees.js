function employees(input){
    for (let person of input){
        let obj = {
            name: person,
            personNum: person.length,
        }
        
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personNum}`)
        
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);