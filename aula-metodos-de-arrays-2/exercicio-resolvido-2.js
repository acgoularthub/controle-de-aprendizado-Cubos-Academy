const carros = [
    { nome: 'corolla', marca: 'toyota', ano: '2019', cor: 'preto' },
    { nome: 'gol', marca: 'volkswagen', ano: '2018', cor: 'branco' },
    { nome: 'uno', marca: 'fiat', ano: '2017', cor: 'preto' },
    { nome: 'celta', marca: 'chevrolet', ano: '2016', cor: 'branco' },
    { nome: 'ka', marca: 'ford', ano: '2015', cor: 'preto' }
]

const ordenaCarro = (arrayDeCarros, campo) => {
    // if (campo === 'nome') {
    //     arrayDeCarros.sort((a, b) => {
    //         return a.nome.localeCompare(b.nome);
    //     });
    //     console.log(arrayDeCarros);
    // }
    // if (campo === 'marca') {
    //     arrayDeCarros.sort((a, b) => {
    //         return a.marca.localeCompare(b.marca);
    //     });
    //     console.log(arrayDeCarros);
    // }
    // if (campo === 'cor') {
    //     arrayDeCarros.sort((a, b) => {
    //         return a.cor.localeCompare(b.cor);
    //     });
    //     console.log(arrayDeCarros);
    // }
    // if (campo === 'ano') {
    //     arrayDeCarros.sort((a, b) => {
    //         return a.ano - b.ano; // o ano, nesse caso, não é string
    //     });
    //     console.log(arrayDeCarros);
    // }

    arrayDeCarros.sort((a, b) => {
        return a[campo].localeCompare(b[campo]); // precisei mudar o ano para string, pra isso funcionar.
    });
    console.log(arrayDeCarros);
}

ordenaCarro(carros, 'nome');
ordenaCarro(carros, 'marca');
ordenaCarro(carros, 'cor');
ordenaCarro(carros, 'ano');