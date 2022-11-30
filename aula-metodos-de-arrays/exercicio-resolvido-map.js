const produtos = [
    { nome: 'arros', preco: 500 },
    { nome: 'feijão', preco: 1000 },
    { nome: 'macarrão', preco: 2000 },
    { nome: 'carne', preco: 3000 }
]

const produtosComDesconto = produtos.map((produto) => {
    return { nome: produto.nome, preco: produto.preco, desconto: produto.preco * 0.1 };
});

console.log(produtosComDesconto);