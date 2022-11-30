/*

Crie uma função que percorra um array com nomes de arquivos.
A função deve verificar se possui pelos menos um arquivo com a extensão .bat.
caso exista, deve exibir a mensagem "vírus detectado", caso contrário, deverá exibir 
a mensagem "nenhum virus encontrado"
*/

const arquivos = ['olho.pdf', 'aula.pdf', 'ggizi.mp4'];

// const verificaVirus = (arrayArquivos) => { // função que recebe um array de arquivos
//     const resultado = arrayArquivos.some((arquivo) => { // função some() que verifica se pelo menos um arquivo possui a extensão .bat
//         const existeExtensão = arquivo.indexOf('.bat'); // função indexOf() que verifica se o arquivo possui a extensão .bat
//         return existeExtensão !== -1; // retorna true se o arquivo possui a extensão .bat
//     })

//     if (resultado) { // se o resultado for true, exibe a mensagem "vírus detectado"
//         console.log('Virus detectado');
//     } else {
//         console.log('nenhum virus encontrado');
//     }
// }

// verificaVirus(arquivos);

function verificaVirus(arrayArquivos) {
    const resultado = arrayArquivos.some(function(arquivo) {
        const existeExtensão = arquivo.indexOf('.bat');
        return existeExtensão !== -1;
    })

    if (resultado) {
        console.log('Virus detectado');
    } else {
        console.log('nenhum virus encontrado');
    }
}

verificaVirus(arquivos);