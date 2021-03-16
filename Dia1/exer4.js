/*Declarando as variáveis a, b, c e delta, faça a fórmula de bhaskara, dando como resultado os valores de
x1 = -b + √delta / (2 * a)
e
x2 = -b - √delta / (2 * a);*/

const a = 1;
const b = 2;
const c = -24;

delta = Math.pow(b, 2) - 4 * a * c;

x1 = (-b + Math.sqrt(delta)) / (2 * a)
x2 = (-b - Math.sqrt(delta)) / (2 * a)

console.log(`x1 = ${x1}\nx2 = ${x2}`);
