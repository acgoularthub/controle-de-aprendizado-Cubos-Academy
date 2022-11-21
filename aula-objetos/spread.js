// o spread operator é usado para copiar um objeto ou array para outro objeto ou array

const pessoa = {
    nome: 'João',
    idade: 20,
    peso: 80,
    altura: 1.80,
    sexo: 'M'
};

const endereco = {
    rua: 'Rua dos Bobos',
    numero: 0,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP'
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);