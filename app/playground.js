var myString = 'abc';
var myBoolean = true;
var myNumber = 10.5;
var myArray = ['A', 'B', 'C'];
var myTuple = ['A', 10];
// const myTuple2: (string, number)[] = [10, 'A'];
// myTuple2[2] = 10;
var myUnknown = true;
var myVoid = undefined; // || null; //utilizado em funções
var a = undefined;
console.log(typeof a);
console.log(a);
var a1 = null; // nulo é um objeto
console.log(typeof a1); //vai imprimir object
console.log(a1);
var test = function () {
    return 'asasa';
};
//nunca terá retorno
// const test = (): never => {
//   //  throw new Error();
//   console.log('never');
// };
console.log(myString);
console.log(myBoolean);
console.log(myNumber);
console.log(myArray);
console.log(myTuple);
console.log(myUnknown);
