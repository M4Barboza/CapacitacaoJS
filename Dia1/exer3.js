//Dado o lado de um triângulo equilátero, imprima sua área. A = (√3/4) * lado²;

const lado = 12;
const area = (Math.sqrt(3)/4) * Math.pow(lado, 2);

console.log(`A area do triangulo de lado ${lado} é: ${area.toFixed(2)}`);