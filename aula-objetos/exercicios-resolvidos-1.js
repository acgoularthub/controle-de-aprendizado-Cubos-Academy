/*
Decare uma variável que armazene um objeto contendo as seguintes propriedades: 
nome, idade, altura, temCNH e apelidos.

depois faça um programa que imprime na tela o belo texto abaixo, substituindo os
dados pessoais pelos dados do objeto:

"José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos:
-Jr
-Juninho"
*/

const pessoa = {
    nome: 'Anderson',
    idade: 33,
    altura: 1.74,
    temCNH: true,
    apelidos: ['Andinho', 'Dinho', 'Coelho', 'Cueio'],
    carro: {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: '2016'
    } // objeto dentro de objeto (aninhado) também pode existir
};


// console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, 
// ${pessoa.temCNH ? 'possui CNH' : 'não possui CNH'} e os seguintes apelidos: 
// ${pessoa.apelidos.join(', ')}`);


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? 'possui CNH' : 'não possui CNH'} e os seguintes apelidos:`);

for (let item of pessoa.apelidos) {
    console.log(`- ${item}`);
}