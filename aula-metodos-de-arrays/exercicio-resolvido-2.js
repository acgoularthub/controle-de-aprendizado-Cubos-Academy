/*
Crie uma função que receba um array de objetos de usuários que contém as propriedades nome e idade.
A função deve validar se todos os usuários são maiores de 18 anos e retornar uma mensagem "festa liberada",
caso contrário deverá exibir  a mensagem "possui um menor de idade".
tudo isso utilizando o conceito de callbacks


*/

const usuarios = [
    { nome: "Carlos", idade: 23 },
    { nome: "Gabriel", idade: 18 },
    { nome: "Lucas", idade: 30 }
];

// const fiscalizarFesta = (usuarios) => {
//     const resultado = usuarios.every((usuario) => {
//         return usuario.idade >= 18;
//     });
//     if (resultado) {
//         console.log("festa liberada");
//     } else {
//         console.log("possui um menor de idade");
//     }
// }

function fiscalizarFesta(usuarios) {
    const resultado = usuarios.every(function(usuario) {
        return usuario.idade >= 18;
    });
    if (resultado) {
        console.log("festa liberada");
    } else {
        console.log("possui um menor de idade");
    }
}

fiscalizarFesta(usuarios);