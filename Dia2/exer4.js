/*Faça um algoritmo que classifique as raízes de uma equação de segundo grau com
base no delta.*/

const a = 1;
const b = -2;
const c = 1;

const delta = b ** 2-4 * a *c;

if (delta > 0) {
    console.log('A equação tem duas raízes');
} else if (delta < 0) {
    console.log('A equação não tem raiz real');
} else {
    console.log('A equação tem uma raíz');
}
