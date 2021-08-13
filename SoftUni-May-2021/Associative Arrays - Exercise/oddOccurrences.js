function oddOccurrences(input){
    let occurrences = {};
    let listOfStrings = input.split(' ');

    for (let string of listOfStrings){
        let stringToLower = string.toLowerCase();

        if (Object.keys(occurrences).includes(stringToLower) == false){
            occurrences[stringToLower] = 0
        } 
        occurrences[stringToLower] += 1
        
    }

    let result = [];
    for (let [key, value] of Object.entries(occurrences)){
        if (value % 2 !== 0){
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');