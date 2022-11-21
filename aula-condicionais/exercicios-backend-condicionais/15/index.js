const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido !== "") {
    console.log(`Olá, ${apelido}!`);
} else if (sobrenome !== "") {
    console.log(`Olá, ${primeiroNome} ${sobrenome}!`);
} else {
    console.log(`Olá, ${primeiroNome}!`);
}