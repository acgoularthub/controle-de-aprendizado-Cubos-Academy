let montante = 90000,
    capitalInicial = 60000,
    meses = 24,
    taxa = (Math.pow(montante / capitalInicial, 1 / meses) - 1) * 100;
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxa}%, pois após ${meses} meses você teve que pagar ${montante} reais.`);