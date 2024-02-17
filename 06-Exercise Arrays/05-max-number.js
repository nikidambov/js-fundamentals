function maxNumber(arr) {
    let topNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (curNum <= rightNum) {
                isTop = false;
            }
        }

        if (isTop) {
            topNumbers.push(curNum);
        }
    }

    console.log(topNumbers.join(" "));
}

maxNumber([1, 4, 3, 2]);