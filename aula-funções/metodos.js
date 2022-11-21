// métodos em javascript são funções que estão associadas a um objeto ou tipo de dado
// usamos o ponto (.) para acessar os métodos de um objeto ou tipo de dado e os parênteses () 
// para invocar o método

const pessoa = {
    nome: 'João',
    sobrenome: 'da Silva',
    idade: 25,
    altura: 1.75,
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos e ${this.altura}m de altura.`);
    }
};

pessoa.apresentacao();

// this é uma palavra reservada que faz referência ao objeto que está sendo executado
// no exemplo acima, this.nome faz referência ao nome do objeto pessoa
// no exemplo abaixo, this.nome faz referência ao nome do objeto pessoa2

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    idade: 25,
    altura: 1.75,
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos e ${this.altura}m de altura.`);
    }
};

pessoa2.apresentacao();