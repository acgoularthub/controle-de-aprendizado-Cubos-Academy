// o metodo sort, ordena os elementos de um array de acordo com a funcao de comparacao
// passada como parametro para o metodo sort (funcao de comparacao) e retorna o proprio array
// ordenado (array original) ordenado de acordo com a funcao de comparacao passada como parametro 
// para o metodo sort (funcao de comparacao)

//exemplo 1
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(function(a, b) {
    return a - b;
});
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//exemplo 2
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(function(a, b) {
    return b - a;
});
console.log(array); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//exemplo 3
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(function(a, b) {
    return 0.5 - Math.random();
});
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//exemplo 4
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(function(a, b) {
    return Math.random() - 0.5;
});
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]