//Escreva um algoritmo que leia um número n e calcule o fatorial de n.

const n =6;
let fatorial = 1;

for(let i = n; i > 1; i--) {
    fatorial *= i; 
}
console.log(fatorial);