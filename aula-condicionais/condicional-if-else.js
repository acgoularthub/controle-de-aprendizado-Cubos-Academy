let idade = 25;
if (idade >= 18) {
    //executado apenas se a condição for verdadeira
    console.log('Pode dirigir');
} else {
    //executado apenas se a condição for falsa
    console.log('Não pode dirigir');
}

idade = 16;
if (idade >= 18) {
    //executado apenas se a condição for verdadeira
    console.log('Pode dirigir');
} else {
    //executado apenas se a condição for falsa
    console.log('Não pode dirigir');
}

// é possivel usar o if/else sem as chaves {} se houver apenas uma linha de código a ser executada 
// dentro do bloco if ou else 

if (idade >= 18)
    console.log('Pode dirigir');
else
    console.log('Não pode dirigir');


console.log('Fim do programa');