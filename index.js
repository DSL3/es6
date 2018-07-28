var numbers = [1, 2, 3, 4, 5, 8];
console.log(numbers.filter(n => n > 4));
                         //Função .........................., parametro de entrada
console.log(numbers.reduce((acum, current) => acum + current, 10));

console.log(numbers.find(n => n === 3));

const [a, b, c, d, e, f = 0 ] = numbers;
console.log(a);
console.log(c);
console.log(e);

// ... spread
const [m, n, ...o] = numbers;
console.log(m);
console.log(n);
console.log(o);

let[a1, b1, , , , c1] = numbers;
console.log(a1, b1, c1);

[b1, a1] = [a1, b1];

console.log(a1, b1);

const otherNumbers = [10, 20, 30, ...numbers];
console.log(otherNumbers);

const s = new Set();

s.add(1).add(2).add(3).add(2);
console.log(s);

console.log(s.has(2));
console.log(s.has(20));

console.log(s.delete(20));
console.log(s.delete(2));

console.log(s.has(2));

// mapa chave e valor
const m4 = new Map();
console.log(m4.set('banana', 10));
console.log(m4.has('banana'));
console.log(m4.has('orange'));