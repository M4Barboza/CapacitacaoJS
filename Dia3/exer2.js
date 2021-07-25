/*Faça uma função divisores() que receba um inteiro como parâmetro e retorne um array com seus
divisores, excluindo o 1, se o inteiro for primo deve retornar “inteiro é primo”. */

function divisores(inteiro){
    const array = [];

    for(let i = 0; i < inteiro; i++){
        if(inteiro%i === 0 && i != 1){
            array.push(i)
        }
    }
    return array.length > 0 ? array : `${inteiro} é primo`;
}

console.log (divisores(15));
console.log (divisores(12));
console.log (divisores(13));
console.log (divisores(19));

