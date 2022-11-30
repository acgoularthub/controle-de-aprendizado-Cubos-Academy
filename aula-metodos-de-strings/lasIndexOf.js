// lastIndexOf retorna o índice do último elemento que satisfaz a função de teste provida. 
//Caso contrário, retorna -1, indicando que nenhum elemento passou no teste. 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// no código a seguir o índice do último elemento que é maior que 5 é 9
const lastIndexOf = (array, element) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(lastIndexOf(array, 5)); // 4
console.log(lastIndexOf(array, 10)); // 9
console.log(lastIndexOf(array, 11)); // -1, pois 11 não existe no array