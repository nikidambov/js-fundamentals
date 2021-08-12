function printAndSum(start, end){
    let sum = 0;
    let resulString = '';

    for (let i = start; i <= end; i++){
        resulString += `${i} `;
        sum += i;


    }

    console.log(resulString)
    console.log(`Sum: ${sum}`)

}

printAndSum(5, 10);

