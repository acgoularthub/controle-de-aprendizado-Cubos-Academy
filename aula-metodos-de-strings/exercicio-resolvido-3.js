// transforme "jose messias junior" em "Jose Messia Junior"

const nome = "jose messias junior";
const arrayNome = nome.split(" ");
const nomeComMaiuscula = [];
let resultado = "";

for (let nome of arrayNome) {
    nomeComMaiuscula.push(nome[0].toUpperCase() + nome.slice(1));
    resultado = nomeComMaiuscula.join(" ");
}

console.log(resultado);