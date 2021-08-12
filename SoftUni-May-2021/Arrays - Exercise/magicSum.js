function magicSum (numbers, givenNumber) {
    let final = [];
    for (let i = 0; i < numbers.length; i++){
        let numOfi = Number(numbers[i]);

        for (let j = i + 1; j < numbers.length; j++){
            let numOfj = Number(numbers[j]);

            if (numOfi + numOfj === givenNumber)
            console.log(numOfi + " " + numOfj);
        }
    }
}


magicSum([1, 2, 3, 4, 5, 6], 6);