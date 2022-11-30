const numeros = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];

// Ordena os números de forma crescente
// numeros.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }

//     return 0;
// });

// console.log(numeros);

numeros.sort((a, b) => a - b);
console.log(numeros);

// Ordena os números de forma decrescente
// numeros.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }

//     return 0;
// });
numeros.sort((a, b) => b - a);

console.log(numeros);