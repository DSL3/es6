const myString: String = 'abc';
const myBoolean: boolean = true;
const myNumber: number = 10.5;
const myArray: string[]= ['A', 'B', 'C'];
const myTuple: [string, number] = ['A', 10];

const myUnknown: any = true;
const myVoid: void = undefined;// || null; //utilizado em funções

const a = undefined;
console.log(typeof a);
console.log(a);

const a1: string|null = null; // nulo é um objeto
console.log(typeof a1); //vai imprimir object
console.log(a1);

const test = (): string|void => {
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

