//Flipping Coin & getting head or tail
const HEAD = 1;
const TAIL = 0;

let flipCoin = Math.floor(Math.random()*10) % 2;
switch(flipCoin){
    case HEAD:
        console.log("Head comes");
        break;
    case TAIL:
        console.log("Tail comes");
        break;
}