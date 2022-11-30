// o metodo reduce executa uma funcao reducer (funcao de reducao) para cada elemento do array, 
// resultando em um unico valor de retorno (resultado da funcao de reducao) 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(resultado); // 55

// exemplo 1
array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
}, 10); // 65