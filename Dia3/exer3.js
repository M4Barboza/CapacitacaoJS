/*Faça uma função que receba a string “nome.formato” como entrada e converta ela para “nome.mp3”
(lembre-se da função que vimos na primeira aula que pode ser aplicada a strings que divide ela em
um delimitador específico). Imprima o resultado na tela. */

function converte(str){
    let strConv = str.split(".");
    strConv[1] = "mp3";
    strConv = strConv.join(".");

    return strConv;
}
console.log(converte("musica.mp4"));
console.log(converte("frog.gif"));
console.log(converte("documento.pdf"));
console.log(converte("texto.tct"));
