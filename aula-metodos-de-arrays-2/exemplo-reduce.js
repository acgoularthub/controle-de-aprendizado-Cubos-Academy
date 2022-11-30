const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduce = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(reduce);

const reduce2 = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 10);

console.log(reduce);