const usuarios = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 31 },
    { nome: 'João', sobrenome: 'lopes', idade: 33 },
    { nome: 'Maria', sobrenome: 'Biribinha', idade: 34 },
    { nome: 'José', sobrenome: 'Jeová', idade: 35 }
];

const novoArray = usuarios.map((usuario) => {
    return { nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade }
});

console.log(novoArray);