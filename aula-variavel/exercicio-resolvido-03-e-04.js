let x = 10,
    y = 2;

let resultado = x + y; //adição
console.log(`O resultado da adição de ${x} mais ${y} é ${resultado}`);

resultado = x - y; //subtração
let mensagem2 = "A subtração de " + x + " menos " + y + " é igual a " + resultado;
console.log(mensagem2);

resultado = x * y; //multiplicação
console.log("resultado da multiplicação: " + resultado);

resultado = x / y; //divisão
console.log("resultado da divisão: " + resultado);

resultado = x % y; //resto da divisão
console.log(`resultado do resto da divisão: ${resultado}`);

resultado = x ** y; //exponenciação
console.log(`resultado da exponenciação de ${x} elevado a ${y}  : ` + resultado);