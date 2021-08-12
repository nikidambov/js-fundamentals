function sumDigits (num) {
let numberAsString = num.toString();
let sum = 0;

for (let digit of numberAsString) {
    sum += Number(digit);
}

console.log(sum);
    

}

sumDigits(543)