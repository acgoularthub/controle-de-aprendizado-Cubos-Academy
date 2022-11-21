//arrow function é uma função anônima que pode ser atribuída a uma variável

//declaração tradicional 
function soma(a, b) {
    return a + b;
}

// declaração arrow function
const soma2 = (a, b) => {
    return a + b;
}

// chamando a função
console.log(soma(1, 2)); // 3
console.log(soma2(1, 2)); // 3

// hoisting não funciona com arrow function
// hoisting é o comportamento padrão do javascript de mover as declarações para o topo do 
// escopo atual (hoisting = içamento)

// o conceito DRY (don't repeat yourself) é muito importante em programação e diz que 
// não devemos repetir código, devemos reutilizar código e evitar repetições 
// para isso, utilizamos funções e estruturas de repetição (for, while, do while, for...in, for...of, etc)