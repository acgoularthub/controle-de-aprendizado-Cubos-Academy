const valorDaCompra = 100;
let numeroDeParcelas = 2;
const taxa = 1;

if (numeroDeParcelas === 1) {
    console.log(`O valor da compra é de R$${valorDaCompra - (valorDaCompra * 0.1)}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    console.log(`O valor da compra é de R$${valorDaCompra} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {
    const valorFinal = valorDaCompra * ((1 + taxa / 100) ** numeroDeParcelas);
    console.log(`O valor da compra é de R$${valorFinal.toFixed(2)} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorFinal / numeroDeParcelas).toFixed(2)}`);
} else {
    console.log('Número de parcelas inválido');
}

numeroDeParcelas = 1;

if (numeroDeParcelas === 1) {
    console.log(`O valor da compra é de R$${valorDaCompra - (valorDaCompra * 0.1)}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    console.log(`O valor da compra é de R$${valorDaCompra} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {
    const valorFinal = valorDaCompra * ((1 + taxa / 100) ** numeroDeParcelas);
    console.log(`O valor da compra é de R$${valorFinal.toFixed(2)} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorFinal / numeroDeParcelas).toFixed(2)}`);
} else {
    console.log('Número de parcelas inválido');
}

numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    console.log(`O valor da compra é de R$${valorDaCompra - (valorDaCompra * 0.1)}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    console.log(`O valor da compra é de R$${valorDaCompra} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {
    const valorFinal = valorDaCompra * ((1 + taxa / 100) ** numeroDeParcelas);
    console.log(`O valor da compra é de R$${valorFinal.toFixed(2)} que serão parcelados em ${numeroDeParcelas} vezes de R$${(valorFinal / numeroDeParcelas).toFixed(2)}`);
} else {
    console.log('Número de parcelas inválido');
}