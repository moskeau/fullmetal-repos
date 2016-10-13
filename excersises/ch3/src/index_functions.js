'use strict'


console.log('/Family Tree––––––––––––––––');

function familyTree(me, mom, dad)
{
	console.log(me +'es el bello y educado hijo de '+ mom + ' y '+ dad);
}
familyTree('Daniel a.k.a Mosko', 'Pita', 'Jorge');


console.log('/Distance––––––––––––––––');

function distance(x1,x2,y1,y2) {
	var dist= Math.sqrt(Math.pow(x2 - x1, 2) +Math.pow(y2 - y1, 2));
  return dist;
} 

console.log(distance(23, 43, 99, 66));

console.log('/Money Exchange––––––––––––––––');

var mxn = 666;

var usdValue = 19.28;
var eurValue = 21.45;

var mxnToUsd = mxn / usdValue;
var mxnToeur = mxn / eurValue;
console.log('El tipo de cambio para el euro es de: ' + mxnToeur + 'y el de dolar es de: ' + mxnToUsd);