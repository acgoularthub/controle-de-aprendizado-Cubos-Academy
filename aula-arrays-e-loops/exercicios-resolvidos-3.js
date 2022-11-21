/*
Fazer um programa que calcula e imprime na tena a soma dos itens de um array de números
*/

const numeros = [4, 6, 11, 3, 9, 2, 1, 8, 7, 5];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);