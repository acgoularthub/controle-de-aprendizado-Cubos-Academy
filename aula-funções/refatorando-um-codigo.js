const pessoa1 = {
    nome: "anderson",
    idade: 33,
    profissao: "programador"
}

const pessoa2 = {
    nome: "maria",
    idade: 21,
    profissao: "estudante"
}

const pessoa3 = {
    nome: "jose",
    idade: 65,
    profissao: "aposentado"
}

function apresentacao(pessoa) {
    if (pessoa.idade < 25) {
        return `Olá, meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
    } else if (pessoa.idade < 65) {
        return `Olá, meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
    } else {
        return `Olá, meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
    }
}

console.log(apresentacao(pessoa1));
console.log(apresentacao(pessoa2));
console.log(apresentacao(pessoa3));