const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: '2016'
};

const pessoa = {
    nome: 'Anderson',
    idade: 33,
    altura: 1.74,
    temCNH: true,
    carro // nesse caso, quando o nome da variável e o conteúdo são os mesmos, vc pode 
    // ocultar a segunda parte e deixar só a primeira. Era --> carro: carro
};

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? 'possui CNH' : 'não possui CNH'} e possui o automóvel marca ${pessoa.carro.marca}, modelo ${pessoa.carro.modelo}, fabricado no ano de ${pessoa.carro.ano}.`);