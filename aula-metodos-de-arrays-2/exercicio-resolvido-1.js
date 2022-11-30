const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 3, nome: 'marcos', idade: 17 },
];
// Ordena os usuários pelo id de forma crescente

usuarios.sort((a, b) => a.id - b.id);
console.log(usuarios);

// Ordena os usuários pelo id de forma decrescente
usuarios.sort((a, b) => b.id - a.id);
console.log(usuarios);