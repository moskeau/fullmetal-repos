'use strict'

console.log('/Sign of number––––––––––––––––');

function SignOfNumbs(n){
	var int ='';
	if(n<0){
		int = '-';
	}
	else{
		int ='+';
	}
	return int;
}
console.log(SignOfNumbs(-14));
console.log(SignOfNumbs(14));

console.log('/Little sort––––––––––––––––');

function littleSort(a, b, c) {
  if (c <= a){
    return [c, a, b];
  }
  else if (c <= b){
    return [a, c, d];
  }
  else {
    return [a, b, c];
  }
}
    console.log(littleSort(8,9,5));

    console.log('Minimum number––––––––––––––––');

function minNumber(a, b, c, d, e){
  if (a > b) {
    return a;
  }
  if (b > c) {
    return a;
  }
  if (c > d) {
    return a;
  }
  if (d > e) {
    return a;
  }
}
var result = minNumber(7, 94, -82, -14, 72);

console.log(result);

