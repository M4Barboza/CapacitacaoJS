/*Troca valor de variáveis. Crie duas variáveis, uma com o valor ‘vermelho’ e outra com o valor ‘rosa’, faça a
primeira variável receber o valor da segunda e vice-versa, ao final mostre no console o valor das duas
variáveis. */


let cor1 = "vermelho";
let cor2= "rosa";
console.log(`cor1 = ${cor1}\ncor2 = ${cor2}`);

let aux;

aux = cor1;
cor1 = cor2;
cor2 = aux;
console.log(`-------------\ncor1 = ${cor1}\ncor2 = ${cor2}`);