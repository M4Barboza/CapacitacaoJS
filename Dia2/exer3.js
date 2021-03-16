/*Faça um algoritmo que receba dois números e determine se esses números são ou não
múltiplos.*/

const a = 26;
const b = 5;

if (a % b == 0 || b % a == 0) 
 {
    console.log(`${a} e ${b} são multiplos`);
} else {
    console.log(`${a} e ${b} não são multiplos`);
}  