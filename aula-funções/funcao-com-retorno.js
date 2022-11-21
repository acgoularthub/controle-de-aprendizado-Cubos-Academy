// verifificar se uma pessoa é maior de idade com funções

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let retornoDaFuncao = maiorDeIdade(17);

if (retornoDaFuncao) {
    console.log('É maior de idade');
} else {
    console.log('É menor de idade');
}