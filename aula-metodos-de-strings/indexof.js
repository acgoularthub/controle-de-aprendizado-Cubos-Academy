/*
criar um programa para saber se um email é válido ou não
- o email deve conter um @
- o email deve conter um . após o @
tem que usar indexof
*/

const email = "acgoula@rtmailgmail@.com";

const arroba = email.indexOf("@");
const ponto = email.indexOf(".");
const tamanho = email.length;

if (arroba > 0 && ponto > arroba && ponto < tamanho - 1) {
    console.log("Email válido");
} else {
    console.log("Email inválido");
}