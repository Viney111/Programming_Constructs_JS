"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter Number :");

for (let i=1; i<=number ; i++)
{
    let powerOfTwo = console.log(2**i);
}