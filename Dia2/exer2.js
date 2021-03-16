//Faça um algoritmo que receba um ponto (x,y) e determine o quadrante deste ponto.

const x = -5;
const y = 9;

//x,y (x e y são positivos ou não negativos)
//
if(x >= 0 && y >= 0) {
    console.log('1 quadrante');
} else if (x < 0 && y >= 0) {
    console.log('2 quadrante');
} else if (x < 0 && y < 0) {
    console.log('3 quadrante');
} else if (x >= 0 && y < 0) {
    console.log('4 quadrante');
}


/* x é negativo, e y é positivo ou não negativo
if (x < 0 && y >= 0) {
    console.log('2 quadrante');
} 
// x e y negativos
if (x < 0 && y < 0) {
    console.log('3 quadrante');
}
// x positivo e y negativo
if (x >= 0 && y < 0) {
    console.log('4 quadrante');
} */

