/**
 imprima o nome do cliente
 imprima a idade do cliente
 modifique a idade do cliente
 imprima a nova idade do cliente
 imprima o nome do primeiro produto consumido
 imprima o preço unitário do ultimo produto consumido
 */

const cliente = {
    nome: "Anderson",
    idade: 33,
    produtos: [{
            nomeProduto: "Guaraná",
            precoUnitario: 500,
            quantidadeComprada: 3
        },
        {
            nomeProduto: "Agua",
            precoUnitario: 300,
            quantidadeComprada: 3
        },
        {
            nomeProduto: "Coke",
            precoUnitario: 500,
            quantidadeComprada: 3
        }
    ]
}

// imprima o nome do cliente:
console.log(cliente.nome);

// imprima a idade do cliente
console.log(cliente.idade);

// modifique a idade do cliente

cliente.idade = 34;

// imprima a nova idade do cliente

console.log(cliente.idade);

// imprima o nome do primeiro produto consumido

console.log(cliente.produtos[0].nomeProduto);

// imprima o preço unitário do ultimo produto consumido

console.log(cliente.produtos[cliente.produtos.length - 1].precoUnitario);