/*Faça um algoritmo que, para uma lista fornecida, calcule o fatorial de cada posição e guarde este
resultado em outra lista. Imprima o resultado no console. */

const arr = [3, 4, 5];

const arrFat = arr.map(e => {
    let res = 1;
    for(let i = 1; i <= e; i++){
        res *= i;
    }

    return res;
})

console.log(arr);
console.log(arrFat);