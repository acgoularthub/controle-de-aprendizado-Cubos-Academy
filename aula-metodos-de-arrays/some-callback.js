// a função some() retorna true se pelo menos um elemento do array satisfizer a condição

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.some((numero) => {

    return numero > 3;

});

console.log(resultado);

// true