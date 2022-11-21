//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago < (valorDoProduto / 100)) {
    let valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
    let parcelasRestantes = (valorDoProduto / 100 - valorPago) / valorParcela;
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela.toFixed()}`);
} else {
    console.log("Pagamento realizado com sucesso");
}