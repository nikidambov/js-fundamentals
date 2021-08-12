function distinctArray(numbers) {
    let nums = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

       if (!nums.includes(currentNumber)) {
           nums.push(currentNumber);
       }
    }

    console.log(nums.join(' '));
}

distinctArray([1, 2, 3, 4]);