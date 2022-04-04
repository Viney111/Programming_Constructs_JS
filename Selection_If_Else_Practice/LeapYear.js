//Checking Leap Year between 1000 & 9999;
let year = (Math.floor(Math.random() *9000)+1000);
console.log("Checking the mentioned year "+year);
if (year % 400 == 0 || year % 100 == 0 &&  year % 4 == 0 ){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year"); 
}