function oddAnddEvenSum(numbers) {
    let oddSum = 0;
    let evenSum = 0;
    let numbersToString = numbers.toString();
    
    for (let i = 0; i < numbersToString.length; i++) {
        let num = Number(numbersToString[i]);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}

console.log(oddAnddEvenSum(3495892137259234));