'use strict'

console.log('/Average mark–––––––––––––––––––––––');

function average(n){
    var n = 9;
    var m = 6;
    var r = 5;
    var n = (n + m + r)/3;
    return n;
}

console.log(average(9));

console.log('/Padding–––––––––––––––––––––––');

function padding (padLeft, padRight, text){
  var Right = [];
  var Left = [];

  while(padLeft > 0){
    Left.push('–');
    padLeft = padLeft -1;
  };

  while(padRight > 0){
    Right.push('–');
    padRight = padRight -1;
  };

  return(Left + text + Right);
}
console.log(padding(7, 4, 'obyecto'));


console.log('/Star triangle–––––––––––––––––––––––');

function triangle (lines, symbol){
  var symbols = '';
  
  for (var i = 1; i <= lines; i++){
    for (var o = 1; o <= i; o++){
      symbols += symbol
    }
    symbols += '\n';
  }
    console.log(symbols)
}

triangle(12,'º');