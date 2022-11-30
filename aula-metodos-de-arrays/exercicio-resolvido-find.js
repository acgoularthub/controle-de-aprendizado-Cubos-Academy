const carros = [
    { marca: 'Ford', modelo: 'Ka', ano: 2019, cor: 'prata' },
    { marca: 'Volkswagen', modelo: 'Gol', ano: 2018, cor: 'preto' },
    { marca: 'Fiat', modelo: 'Uno', ano: 2017, cor: 'branco' },
    { marca: 'Ford', modelo: 'Fiesta', ano: 2016, cor: 'azul' },
    { marca: 'Volkswagen', modelo: 'Fox', ano: 2015, cor: 'prata' }
];

//Encontre o carro com a cor prata

// const buscaCarro = (marca, arrayCarros) => {
//     const resultado = arrayCarros.find((carro) => {
//         return carro.marca === marca;
//     });
//     console.log(resultado);
// }







buscaCarro('Ford', carros);













function buscaCarro(nomeDoCarro, arrayDeCarros) {
    const resultado = arrayDeCarros.find(function(carro) {
        return carro.marca === nomeDoCarro;
    })

    console.log(resultado);
}