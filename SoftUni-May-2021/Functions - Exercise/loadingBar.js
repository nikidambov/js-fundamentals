function loadingBar (number) {
    let string = String(number);
    let percentAndDots = '';
    let stringSplit = string.split('')
    let firstNum = stringSplit[0]

    if (number === 100){
        console.log(`${number}% Complete! 
[%%%%%%%%%%]`);
        return;

    } else {
        if(!(number === 0)) {
        for (let i = 0; i < firstNum; i++){
            percentAndDots += "%"
        }
    } else {
        console.log(`${number}% [..........]
Still loading...`)
        return;
    }
    }
        for (let i = 1; i <= 10 - firstNum; i++) {
            percentAndDots += ".";
        }
        
        
        console.log(`${number}% [${percentAndDots}]
Still loading...`);
 
}

loadingBar(50);