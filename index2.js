
// //Funciona mas com as regras do lint pode gerar erro
// var sayHello = (name) => `Hello ${name}`;



//  var sayHello = (name) => {
//     return  `Hello ${name}`;
//  };


// //ECMAScript 5
// function sayHello() {
//     return 'Hello';
// }   

//Corrigindo perante as regras do lint
var sayHello = name => `Hello ${name}`;
var printHello = name => {
    console.log(`Hello ${name}`);
}

var getSiblings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('José'));
printHello('Berardo');
console.log(getSiblings(10));