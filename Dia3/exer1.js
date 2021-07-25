/* Faça uma função delta que calcule o delta, uma função x1 que calcule X1 e outra função x2 que
calcule X2, passe estas como parâmetro, junto com os valores a, b e c, para uma função
“calculaBhaskara” que deve calcular a fórmula de Bhaskara e imprimir os resultados. */

function calculaBhaskara(delta, x1, x2, a, b, c){
    const resDelta = delta(a, b, c);
    if(resDelta > 0){
        console.log("Função possui duas raízes");
        console.log(`x1: ${x1(a, b, resDelta)}\nx2: ${x2(a, b, resDelta)}`);
    }
    else if (resDelta < 0){
        console.log("Não possui raíz real");
    }
    else{
        console.log("Função com apenas uma raíz");
        console.log(`x1: ${x1(a, b, resDelta)}`);
    }
}

function delta(a,b,c){
    return b**2 - 4 *a *c;
}
function x1(a, b, delta){
    return(-b - Math.sqrt(delta, 2))/2*a;
}
function x2(a, b, delta){
    return(-b + Math.sqrt(delta, 2))/2*a;
}
const a = 1;
const b = -1;
const c = 2;

calculaBhaskara(delta, x1, x2, a, b, c);