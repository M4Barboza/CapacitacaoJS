//Escreva um algoritmo que leia vários valores e calcule o produto deles.

const valores = [1, 2, 3, 4, 5];

let produto = valores.length ? valores[0] : 0;
let i = 1;
do {
    produto *= valores [i];
    i *= 1;
}while (i < valores.length) 

console.log(produto);