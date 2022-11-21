const saldo = 1;
// solução clássica para o problema do saldo no singular ou plural
//if (saldo <= 1 && saldo >= 0) {
//    console.log(`Saldo: ${saldo} real`);
//} else if (saldo > 1) {
//    console.log(`Saldo: ${saldo} reais`);
//}

const unidade = (saldo === 1 ? 'real' : 'reais'); // operador ternário
//dessa forma, é como se escrevessemos o seguinte código:
//let unidade; 
//if (saldo === 1) {
//    unidade = 'real';
//} else {
//    unidade = 'reais';
//}
console.log(`Saldo: ${saldo} ${unidade}`);
const saldo2 = 1000;
console.log(`Saldo: ${saldo2} ${unidade}`);

/*

O ternário é uma forma de escrever um if/else em uma única linha.
A sintaxe é a seguinte:
condicao ? valor_se_verdadeiro : valor_se_falso

*/