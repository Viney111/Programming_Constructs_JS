//Calculate Sum and Average of 5 Random 2 Digit Number
let num = 0;
let summing = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    num = Math.floor(Math.random()*100);
    summing = summing + num;
}
let average = summing / countOfRandommNumbers;
console.log("Sum : " +summing +", Average : "+average);