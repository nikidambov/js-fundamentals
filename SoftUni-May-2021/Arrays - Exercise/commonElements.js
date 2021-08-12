function commonElements (firstList, secondList) {

    for (let i = 0; i < firstList.length; i++) {
        let first = firstList[i];

        for ( let j = 0; j < secondList.length; j++) {
            let second = secondList[j]

            if (first === second) {
                console.log(first);
            }
        }
        
    }

}

commonElements
(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);