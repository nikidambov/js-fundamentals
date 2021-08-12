function rounding(num, precission){
    if (precission > 15){
        precission = 15;
    }
    const result = num.toFixed(precission);
    const resultWithoutZero = parseFloat(result);
    console.log(resultWithoutZero);

}

rounding(10.5,3)