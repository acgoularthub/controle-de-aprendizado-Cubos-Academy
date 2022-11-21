const pessoa1 = {
    nome: "anderson",
    idade: 33,
    altura: 1.75,
    profissao: "programador"
}

const pessoa2 = {
    nome: "maria",
    idade: 12,
    altura: 1.60,
    profissao: "estudante"
}

const pessoa3 = {
    nome: "jose",
    idade: 65,
    altura: 1.80,
    profissao: "aposentado"
}

function faixaEtaria(idade) {
    if (idade < 25) {
        return 'jovem';
    } else if (idade < 65) {
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
}

function apresentacao(pessoa) {
    return `Olá, meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
}

console.log(apresentacao(pessoa1));
console.log(apresentacao(pessoa2));
console.log(apresentacao(pessoa3));