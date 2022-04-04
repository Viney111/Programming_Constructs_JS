"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let numberPrimeOrNot = prompt("Enter number :");
CheckPrime(numberPrimeOrNot);
function CheckPrime(number){
    let primeFlag = 0;
    for (let i = 2; i<=number/2 ; i++)
    { 
        if (number % i == 0)
        {
            primeFlag = 0;
            break;
        }
        else 
        {
            primeFlag = 1;
        }
    }
    if (primeFlag == 1){
        console.log(number +" is a Prime Number")
    }
    else{
        console.log(number +" is not a Prime Number")
    }
}