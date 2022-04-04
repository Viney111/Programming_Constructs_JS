//Checking Day falls between a date or not
console.log(" Check day of month is between March 20 and June 20");

let day=(Math.floor(Math.random() * 10)%31)+1;
let month=(Math.floor(Math.random() * 10)%6)+1;

console.log("Day : "+day+" & Month : "+month);
if ( day> 20 && day< 31 && month == 3 )
{
console.log("Input date is within range.");
}
else if ( day> 1 && day< 30 && month == 4 )
{
console.log("Input date is within range.");
}
else if ( day> 1 && day< 31 && month == 5 )
{
console.log("Input date is within range.");
}
else if ( day> 1 && day< 20 && month == 6 )
{
console.log("Input date is within range.");
}
else
{
console.log("False");
}