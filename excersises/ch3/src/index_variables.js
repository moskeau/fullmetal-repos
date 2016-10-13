'use strict' 

console.log('/Money Exchange––––––––––––––––');

function moneyExchange(mxn) {
	var eurExchange = 21.45;
	var moneyExchange = mxn / eurExchange;
return moneyExchange;
}

console.log(moneyExchange(140));

console.log('/Money Exchange––––––––––––––––');

var prettyDress = 500;
var greenJeans = 200;
var brownJacket = 250;
var Sneakers = 120;
var whiteSocks = 70;
var discountDress = 10 / 100;
var discountSocks = 50 / 100;
console.log((prettyDress*discountDress) + (whiteSocks*discountSocks) + brownJacket + Sneakers);