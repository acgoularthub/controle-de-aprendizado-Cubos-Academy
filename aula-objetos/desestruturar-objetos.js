// desestruturar objetos - destructuring objects

const pessoa = {
    nome: 'João',
    idade: 20,
    peso: 80,
    altura: 1.80,
    sexo: 'M'
};

// const nme 0 pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa;
// o restante dos atributos do objeto pessoa, serão armazenados na variável outros
// (que é um objeto)
console.log(nome, idade);

// você bota as chaves à esquerda do objeto e depois o nome da variável
// que você quer que receba o valor do objeto. O nome da variável tem que ser o 
// mesmo nome da propriedade do objeto.

console.log(outros);