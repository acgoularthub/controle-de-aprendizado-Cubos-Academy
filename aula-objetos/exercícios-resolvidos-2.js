/*
- Crie um objeto que represente o cartão de consumo de um cliente.
Deve ter:
* nome do cliente
* idade do cliente
* produtos consumidos

- cada produto pode ter:
* nome do produto
* valor do produto (em centavos)
* quantidade de produtos consumidos
*/

const cliente = {
    nome: "Anderson",
    idade: 33,
    produtos: [{
            nomeProduto: "Guaraná",
            PrecoUnitario: 500,
            quantidadeComprada: 3
        },
        {
            nomeProduto: "Agua",
            PrecoUnitario: 300,
            quantidadeComprada: 3
        },
        {
            nomeProduto: "Coke",
            PrecoUnitario: 500,
            quantidadeComprada: 3
        }
    ]
}

console.log(cliente);