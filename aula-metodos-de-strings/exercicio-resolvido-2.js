let dia = 24,
    mes = 3,
    ano = 1989;

function imprimirData(dia, mes, ano) {
    let diaAlterado = String(dia).padStart(2, "0");
    let mesAlterado = String(mes).padStart(2, "0");
    console.log(`${diaAlterado}/${mesAlterado}/${ano}`);
}

console.log(imprimirData(dia, mes, ano));