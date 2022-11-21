function faixaEtaria(idade) {
    if (idade <= 21) {
        return 'Jovem';
    } else if (idade < 65) {
        return 'Adulto(a)';
    } else {
        return 'Idoso(a)';
    }
}

const pessoa = {
    nome: 'Anderson',
    idade: 33
};

console.log(`${pessoa.nome} é ${faixaEtaria(pessoa.idade)}`);