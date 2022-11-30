/*
quero obter apenas dois digitos do estado de uma cidade
*/

const cidade = "salvador-BA";
let estado = cidade.slice(cidade.length - 2);

console.log(estado);