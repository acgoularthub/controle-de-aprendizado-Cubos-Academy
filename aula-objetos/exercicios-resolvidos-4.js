/*
Faça um programa que imprime uma mensagem amigável (que inclui o nome do cliente) que 
informa o valor que o cliemte tem que pagar
 */
const produtos = [{
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

const cliente = {
    nome: "Anderson",
    idade: 33,
    produtos
}

let valorFinal = 0;

for (let valor of produtos) {
    valorFinal += (valor.precoUnitario * valor.quantidadeComprada)
}

console.log(`Olá, ${cliente.nome}, o valor final de sua conta é de R$${(valorFinal/100).toFixed(2)}. `)