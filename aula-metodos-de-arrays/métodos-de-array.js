// arrays tem alguns métodos que podem ser usados para manipular os dados
// dentro do array de várias maneiras

// o método .push() adiciona um item ao final do array
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// o método .pop() remove o último item do array
numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

// o método .unshift() adiciona um item ao início do array
numeros.unshift(0);
console.log(numeros); // [0, 1, 2, 3, 4, 5]

// o método .shift() remove o primeiro item do array
numeros.shift();
console.log(numeros); // [1, 2, 3, 4, 5]

// o método .splice() remove um item do array
// o primeiro argumento é o índice do item a ser removido
// o segundo argumento é o número de itens a serem removidos
numeros.splice(2, 1);
console.log(numeros); // [1, 2, 4, 5]

// o método .slice() retorna uma cópia de uma parte do array
// o primeiro argumento é o índice do item a ser copiado
// o segundo argumento é o índice do item que não será copiado
const copia = numeros.slice(1, 3);
console.log(copia); // [2, 4]

// o método .concat() concatena dois arrays
const numeros2 = [6, 7, 8, 9, 10];
const numeros3 = numeros.concat(numeros2);
console.log(numeros3); // [1, 2, 4, 5, 6, 7, 8, 9, 10]

// o método .join() retorna uma string com os itens do array separados por vírgula
const numerosString = numeros3.join();
console.log(numerosString); // 1,2,4,5,6,7,8,9,10

// o método .indexOf() retorna o índice do item passado como argumento
const indice = numeros3.indexOf(8);
console.log(indice); // 6

// o método .includes() retorna true se o item passado como argumento estiver no array
const temOito = numeros3.includes(8);
console.log(temOito); // true

// o método .reverse() inverte a ordem dos itens do array
numeros3.reverse();
console.log(numeros3); // [10, 9, 8, 7, 6, 5, 4, 2, 1]

// o método .sort() ordena os itens do array
// por padrão, o método ordena os itens como strings
// para ordenar os itens como números, é preciso passar uma função como argumento
numeros3.sort();
console.log(numeros3); // [1, 10, 2, 4, 5, 6, 7, 8, 9]
numeros3.sort((a, b) => a - b);
console.log(numeros3); // [1, 2, 4, 5, 6, 7, 8, 9, 10]

// o método .map() cria um novo array com os resultados da função para cada item do array
const numeros4 = numeros3.map((numero) => numero * 2);
console.log(numeros4); // [2, 4, 8, 10, 12, 14, 16, 18, 20]

// o método .filter() cria um novo array com todos os itens que passaram no teste implementado pela função
const numerosPares = numeros4.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 8, 10, 12, 14, 16, 18, 20]

// o método .reduce() executa uma função para cada item do array (da esquerda para a direita) e retorna um único valor
const soma = numeros4.reduce((total, numero) => total + numero);
console.log(soma); // 90

// o método .every() verifica se todos os itens do array passam no teste implementado pela função
const todosSaoPares = numerosPares.every((numero) => numero % 2 === 0);
console.log(todosSaoPares); // true

// o método .some() verifica se algum item do array passa no teste implementado pela função
const temImpar = numerosPares.some((numero) => numero % 2 !== 0);
console.log(temImpar); // false

// o método .find() retorna o valor do primeiro item do array que passa no teste implementado pela função
const primeiroImpar = numeros4.find((numero) => numero % 2 !== 0);
console.log(primeiroImpar); // 5

// o método .findIndex() retorna o índice do primeiro item do array que passa no teste implementado pela função
const indiceDoPrimeiroImpar = numeros4.findIndex((numero) => numero % 2 !== 0);
console.log(indiceDoPrimeiroImpar); // 3

// o método .forEach() executa uma função para cada item do array
numeros4.forEach((numero) => console.log(numero));

// o método .fill() preenche todos os elementos do array com um valor estático
const numeros5 = [1, 2, 3, 4, 5];
numeros5.fill(0);
console.log(numeros5); // [0, 0, 0, 0, 0]

// o método .flat() cria um novo array com todos os elementos sub-array concatenados nele de forma recursiva de acordo com a profundidade especificada
const numeros6 = [1, 2, [3, 4, [5, 6]]];