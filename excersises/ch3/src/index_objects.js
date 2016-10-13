'use strict'
console.log ('/Recipe Card–––––––––––––––––––––––––');

var recipe = {
  title : 'lasagna',
  ingredients : {
  	pasta : 4,
  	carne : 3,
  	queso : 4,
  	salsa : 1
  },
  difficulty : 2,
	steps : ['poner la masa en un recipiente',
	'poner una capa de salsa',
	'poner la carne',
	'poner queso',
	'poner otra capa de masa',
	'repetir los pasos']
}

console.log(recipe.title);
console.log(recipe.ingredients);
console.log(recipe.difficulty);
console.log(recipe.steps);

console.log ('/Contact Database–––––––––––––––––––––––––');

var contacts = [{
name : 'Juancholo',
homePhone : 554802943,
officePhone : 52641022,
cellPhone : 5538946258,
address : {
	street : 'Gabriel Mancera',
	numbExt : '66',
	numbInt : '6',
	col : 'del valle',
	del : 'benito juarez'}
},
{
name : 'LaJenny',
homePhone : 55842085,
officePhone : 56014078,
cellPhone : 5536927655,
address : {
	street : 'Colima',
	numbExt : '316',
	numbInt : '1',
	col : 'roma norte',
	del : 'Cuauhtemoc'}
},
{
name : 'Ivan',
homePhone : 55839475,
officePhone : 55820485,
cellPhone : 5538910384,
address : {
	street : 'Medellin',
	numbExt : '666',
	numbInt : '7',
	col : 'roma sur',
	del : 'Cuauhtemoc'}
},
{
name : 'Beto Holguín',
homePhone : 54104584,
officePhone : 55342954,
cellPhone : 5501298549,
address : {
	street : 'Av. Santa Fe',
	numbExt : '1080',
	numbInt : '720',
	col : 'Santa Fe',
	del : 'Cuajimalpa'}
},
{
name : 'Brendita',
homePhone : 54253854,
officePhone : 55540354,
cellPhone : 5509483219,
address : {
	street : 'Av. Santa Fe',
	numbExt : '1081',
	numbInt : '4',
	col : 'Santa Fe',
	del : 'Cuajimalpa'}
}
]
function filter (contacts, initials) {
    var contactsResult = [];
    for (var i = 0; i < contacts.length; i++) {
        if(initials == contacts[i].name.charAt(0)){
            contactsResult.push(contacts[i].name);
        }
    };
    console.log(contactsResult);
}

filter(contacts,'B');
filter(contacts, 'L');

console.log ('/Points–––––––––––––––––––––––––');


 var p1 = {
 	x : 70,
  y : 70
};
 var p2 = {
 	x : 14, 
 	y : 14
 };
 var p3 = {
 	x : -70,
 	y : 70
 	};

  function equalV(p1,p2,p3){

  	if ( p1.x == p2.x && p1.y == p2.y){
  		console.log('the point 1 and the poin2 to are equal vectors');
  	}
  	else if (p2.x == p3.x && p2.y == p3.y){
  		console.log('the point 2 and the poin 3 to are equal vectors');
  	}
  	else if (p1.x == p3.x && p1.y == p3.y){
  		console.log('the point 1 and the poin 3 to are equal vectors');
  	}
  	else{
  	console.log('none of this vectors are equal to each other');
  };
  }


var p3 = {
  x: -70,
  y: 70,
  dist: function distanceTo (pD) {
  return Math.sqrt(Math.pow((pD.x - this.x),2) + Math.pow((pD.y - this.y), 2));
}
}
console.log(p3.dist(p1));