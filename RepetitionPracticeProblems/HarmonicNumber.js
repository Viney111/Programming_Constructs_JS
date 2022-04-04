"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter number  :");

for (let i= 1; i<=number ; i++)
{
  let SumOfHarmonicSeries = (1/i);
  console.log(SumOfHarmonicSeries);
}