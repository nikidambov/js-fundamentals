function oddOccurrences(input){
    let obj = {

    };
    let array = [];

    let listOfString = input.split(' ');

    for (let word of listOfString){
        word = word.toLowerCase();
        obj[word] = 0;
    }

    for (let word of listOfString){
        word = word.toLowerCase();
        if (Object.keys(obj).includes(word)){
            obj[word] += 1
        }
    }

    for (let [key, value] of Object.entries(obj)){
        if (value % 2 != 0){
            array.push(key);
        }
    }

    console.log(array.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');