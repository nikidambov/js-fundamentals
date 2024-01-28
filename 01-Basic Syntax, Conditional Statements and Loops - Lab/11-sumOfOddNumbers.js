function sumOfOddNumbers(n) {
    let oddNumbers = 0;
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            oddNumbers++;
            if (oddNumbers === n) {
                break;
            }
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);