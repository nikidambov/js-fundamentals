function bombNumbers(numbers, numberAndPower) {
    let specialNumber = numberAndPower[0];
    let detonations = numberAndPower[1];
    let sum = 0;

    for (let list of numbers) {
        if (!numbers.includes(specialNumber)) {
            break;
        }
        let index = numbers.indexOf(specialNumber);
        let eliminations = detonations * 2 + 1
        let startIndex = index - detonations

        if (startIndex < 0) {
            eliminations = eliminations + startIndex
            startIndex = 0;
        }

        numbers.splice(startIndex, eliminations)
    }

    for (let num of numbers) {
        sum += num
    }

    console.log(sum)

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);