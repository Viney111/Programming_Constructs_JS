//Find Max & Min out of 5 Random 3 Digit Numbers
let num1 = Math.floor(Math.random()*900)+100;
let num2 = Math.floor(Math.random()*900)+100;
let num3 = Math.floor(Math.random()*900)+100;
let num4 = Math.floor(Math.random()*900)+100;
let num5 = Math.floor(Math.random()*900)+100;
console.log("Numbers to be comapred "+ num1,num2,num3,num4,num5);

//For finding Max Number
if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log(num1 + " is maximum number");
}
if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    console.log(num2 + " is maximum number");
}
if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    console.log(num3 + " is maximum number");
}
if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    console.log(num4 + " is maximum number");
}
if(num5>num2 && num5>num3 && num5>num4 && num5>num1){
    console.log(num5 + " is maximum number");
}
//For finding Min Number
if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
    console.log(num1 + " is minimum number");
}
if(num2<num1 && num2<num3 && num2<num4 && num2<num5){
    console.log(num2 + " is minimum number");
}
if(num3<num1 && num3<num2 && num3<num4 && num3<num5){
    console.log(num3 + " is minimum number");
}
if(num4<num1 && num4<num2 && num4<num3 && num4<num5){
    console.log(num4 + " is minimum number");
}
if(num5<num2 && num5<num3 && num5<num4 && num5<num1){
    console.log(num5 + " is minimum number");
}