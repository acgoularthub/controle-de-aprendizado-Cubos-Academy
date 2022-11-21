//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    console.log(`Valor a ser pago: R$${((valorDoProduto-(valorDoProduto * 0.1))/100).toFixed(2)} reais`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${((valorDoProduto-(valorDoProduto * 0.03))/100).toFixed(2)} reais`);
} else if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${((valorDoProduto-(valorDoProduto * 0.05))/100).toFixed(2)} reais`);
} else {
    console.log("Tipo de pagamento inválido");
}