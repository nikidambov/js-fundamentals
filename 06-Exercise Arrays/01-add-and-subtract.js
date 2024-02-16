function addAndSubtract(input) {

    newInput = [];
    newSum = 0;
    oldSum = 0;

    for (let i = 0; i < input.length; i++) {
        let curNum = input[i];
        oldSum = oldSum + curNum;

        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }

        newInput.push(curNum);
        newSum += curNum;
    }

    console.log(newInput);
    console.log(oldSum);
    console.log(newSum);



//     originalInput = input.slice(0);
//     modifiedInput = input;

//     let originalInputSum = 0;
//     let modifiedInputSum = 0;

//     for (let i = 0; i < modifiedInput.length; i++) {
//         if (modifiedInput[i] % 2 === 0) {
//             modifiedInput[i] = modifiedInput[i] + i;
//         } else {
//             modifiedInput[i] = modifiedInput[i] - i;
//         }
//     }

//     for (num of originalInput) {
//         originalInputSum = originalInputSum += num;
//     }

//     for (num of modifiedInput) {
//         modifiedInputSum = modifiedInputSum += num;
//     }

//     console.log(modifiedInput);
//     console.log(originalInputSum);
//     console.log(modifiedInputSum);

}

addAndSubtract([5, 15, 23, 56, 35]);