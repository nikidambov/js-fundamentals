function mergeArrays (first, second) {
    let resultList = [];

    for (let i = 0; i < first.length; i++){
        let firstEl = first[i];
        let secondEl = second[i];

        if (i % 2 === 0){
            let sum = Number(firstEl) + Number(secondEl);
            resultList.push(sum);
        } else {
            let result = firstEl + secondEl;
            resultList.push(result);
        }
    }

    let resultListAsString = resultList.join(' - ');
    console.log(resultListAsString);
    

}

mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);