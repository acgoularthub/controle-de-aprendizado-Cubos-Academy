// função é um bloco de código que pode ser executado quando chamado (invocado) e 
// pode receber parâmetros e retornar um valor (opcional) 
// ela serve para reutilizar código e evitar repetições

function soma(a, b) {
    return a + b;
}

// chamando a função
console.log(soma(1, 2)); // 3



function soma2(a, b) {
    console.log(a + b);
}

soma2(3, 4); // 7

//função sem retorno e sem parâmetros

function mensagem() {
    console.log('Olá, mundo!');
}

mensagem(); // Olá, mundo!

// função com retorno e sem parâmetros

function mensagem2() {
    return 'Olá, mundo!';
}

console.log(mensagem2()); // Olá, mundo!