const pessoa = {
    nome: 'João',
    sobrenome: 'da Silva',
    idade: 25,
    altura: 1.75
};

apresentacao(pessoa.nome, pessoa.idade, pessoa.altura);

function apresentacao(nome, idade, altura) {
    if (idade < 18) {
        console.log(`Olá, meu nome é ${nome}, sou um jovem de ${idade} anos e tenho ${altura}m.`);
    } else if (idade >= 18 && idade < 60) {
        console.log(`Olá, meu nome é ${nome}, sou um adulto de ${idade} anos e tenho ${altura}m.`);
    } else {
        console.log(`Olá, meu nome é ${nome}, sou um idoso de ${idade} anos e tenho ${altura}m.`);
    }
}

apresentacao('João', 17, 1.70);
apresentacao('Maria', 25, 1.60);
apresentacao('José', 65, 1.80);