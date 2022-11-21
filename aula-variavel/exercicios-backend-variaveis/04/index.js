let capital = 1000,
    tempo = 5,
    taxa = 0.125;
let montante = capital * Math.pow(1 + taxa, tempo);
console.log(`O montante é de ${montante}`);