const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 3, nome: 'marcos', idade: 17 }
];

// usar o reduce para filtrar o usuário que possui a maior idade e retornar o objeto completo
// com os dados do usuário encontrado.

const maiorIdade = usuarios.reduce((acumulador, valorAtual) => { // aqui o acumulador é o valor que vai ser retornado
    let maior = acumulador;
    if (valorAtual.idade > acumulador.idade) {
        maior = valorAtual;
    }
    return maior;
}); // aqui eu não passo o valor inicial, então o primeiro valor do array será o valor inicial do acumulador

console.log(maiorIdade);