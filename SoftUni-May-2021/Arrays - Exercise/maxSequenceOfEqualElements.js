function maxSequenceOfEqualElements (listOfNumbers) {
    let longestSequence = [];

    for (let i = 0; i < listOfNumbers.length; i++) {
        let currentNumberOfi = Number(listOfNumbers[i]);
        let currentSequence = [currentNumberOfi];

        for (let j = i + 1; j < listOfNumbers.length; j++) {
            let currentNumberOfj = Number(listOfNumbers[j]);

            if (currentNumberOfi === currentNumberOfj) {
                currentSequence.push(currentNumberOfj)
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
            currentSequence = [];
        } else {
            currentSequence = [];
        }

    }
    
    console.log(longestSequence.join(" "))
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);