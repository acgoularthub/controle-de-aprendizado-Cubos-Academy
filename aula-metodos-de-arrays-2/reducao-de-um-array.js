const array = [
    [0, 1],
    [2, 3, 4],
    [5, 6, 7]
];

const reduce = array.reduce((acumulador, valorAtual) => {
    return [...acumulador, ...valorAtual];
});

console.log(reduce);