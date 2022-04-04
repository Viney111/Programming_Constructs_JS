"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter Number :");

function Factorial(num){
    let factorial=1;
    for (let i = 1 ; i<=num ; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}
let result = Factorial(number);
console.log("Factorial  =" + result);