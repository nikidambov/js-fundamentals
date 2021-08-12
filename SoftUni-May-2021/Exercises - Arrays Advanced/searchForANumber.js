function searchForANumber (list, secondList) {
    let number = secondList[2];
    let count = 0;
    let newList = [];
    for (let i = 0; i <= list.length; i++) {
        if (i >= secondList[0]){
            break;
        }
        num = list[i]
        newList.push(num)
    }
    newList.splice(0, secondList[1])

    for (let newListOfNums of newList) {
        if (newListOfNums === number){
            count++
        }
    }
    console.log(`Number ${number} occurs ${count} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);