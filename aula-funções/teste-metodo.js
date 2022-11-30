const pessoa3 = {
    nome: "jose",
    idade: 65,
    altura: 1.80,
    profissao: "aposentado",
    faixaEtaria: function(idade) {
        if (idade < 25) {
            return 'jovem';
        } else if (idade < 65) {
            return 'adulto(a)';
        } else {
            return 'idoso(a)';
        }
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, sou um(a) ${this.faixaEtaria(this.idade)} de ${this.idade} anos e sou ${this.profissao}.`;
    }
}

console.log(pessoa3.apresentacao());