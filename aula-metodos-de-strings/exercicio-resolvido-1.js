// alterar uma string para que substitua o ponto por virgula, no valor de um número

const valor = "US$ 1000.00";

const novoValor = valor.replace(".", ",");

console.log(novoValor); // US$ 1000,00

const valor2 = "1,000,000";

function substituiVirgulas(textoOriginal, oQueSubstituir, peloOQueSubstituir) {
    while (textoOriginal !== textoOriginal.replace(oQueSubstituir, peloOQueSubstituir)) {
        textoOriginal = textoOriginal.replace(oQueSubstituir, peloOQueSubstituir);
    }
    return textoOriginal;
}

console.log(substituiVirgulas(valor2, ",", ".")); // 01.000.000