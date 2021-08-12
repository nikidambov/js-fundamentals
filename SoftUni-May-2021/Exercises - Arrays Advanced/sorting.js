function sorting (numbers) {
    let sortedNumbers = [];
    let numbersLength = numbers.length

    for (let i = 0; i < numbersLength; i++) {
        let theNumber;

        if (i % 2 === 0) {
            theNumber = Math.max(...numbers);
        } else {
            theNumber = Math.min(...numbers);
        }

        sortedNumbers.push(theNumber);
        numbers.splice(numbers.indexOf(theNumber), 1);
    }

    console.log(sortedNumbers.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);