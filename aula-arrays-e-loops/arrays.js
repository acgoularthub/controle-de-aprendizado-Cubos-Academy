// arrays são um conjunto de dados que podem ser acessados por um índice (posição) 
// e são mutáveis (podem ser alterados)

// declaração de um array
const array = [1, 2, 3, 4, 5];

// acessando um elemento do array
console.log(array[0]); // 1 
console.log(array[1]); // 2

// alterando um elemento do array
array[0] = 10;
console.log(array[0]); // 10

// adicionando um elemento no final do array
array.push(6);
console.log(array); // [10, 2, 3, 4, 5, 6]

// removendo o último elemento do array
array.pop();
console.log(array); // [10, 2, 3, 4, 5]

// adicionando um elemento no início do array
array.unshift(1);
console.log(array); // [1, 10, 2, 3, 4, 5]

// removendo o primeiro elemento do array
array.shift();
console.log(array); // [10, 2, 3, 4, 5]

// removendo um elemento do array
array.splice(1, 1);
console.log(array); // [10, 3, 4, 5]

// adicionando um elemento no array
array.splice(1, 0, 2);
console.log(array); // [10, 2, 3, 4, 5]
//splice (posição, quantidade de elementos a serem removidos, elemento a ser adicionado)