function addandSubtract (list) {
    let oldListSum = 0;
    let newListSum = 0;


    for (let i = 0; i < list.length; i++) {
        let num = list[i];
        oldListSum += num;

        if (num % 2 === 0) {
            list[i] = num + i;
            newListSum += list[i];
        } else {
            list[i] = num - i;
            newListSum += list[i];
        }
          
    }

    console.log(list);
    console.log(oldListSum);
    console.log(newListSum);


}

addandSubtract([5, 15, 23, 56, 35]);