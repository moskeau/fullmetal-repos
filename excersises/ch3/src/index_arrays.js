'use strict';

console.log('/First Element–––––––––––––––––––––––');

function firstElement (arraySrc, numbelements) {
    var destArray = [];
    for (var i = 0; i < numbelements; i++) {
        destArray.push(arraySrc[i]);
    };
    return destArray;
}

console.log(firstElement([66, 6, -6, 16, 0], 1));
console.log(firstElement([3, -8, 'ola k ase', 3.14159, 'k onda k ai'], 3));
console.log(firstElement([1.999, 43, 7.1421, 111], 0));

console.log('/Join All–––––––––––––––––––––––');

function joinAll (colors,symbols){
	var rgwb = '';
	for  (var i = 0; i < 4; i++) {
		rgwb +=colors [i] + symbols;
};
console.log(rgwb);
}
joinAll(['red', 'green', 'white', 'black'], '7');


console.log('/Reverse–––––––––––––––––––––––');

function reverse(array){
  var resultArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
     resultArray.push(array[i]);
  };
console.log(resultArray);
}

console.log(reverse([43,7,16.21,34]));