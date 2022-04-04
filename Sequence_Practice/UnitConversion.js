//Unit Conversion
//a
function ftToIn(valueInInch){
    return valueInInch/12;
}
let convertedValue = ftToIn(42);
console.log("Inch value from feet is "+convertedValue);
//b & c
function ftToMtr(valueInFeet){
    return valueInFeet/3.281;
}
let area = ftToMtr(60) * ftToMtr(40);
console.log("Area in sq meters "+ area);

function SqMtrToAcre(sqMeterValue){
    return sqMeterValue/4047;
}
console.log("Ares in Acres :" +SqMtrToAcre(area));