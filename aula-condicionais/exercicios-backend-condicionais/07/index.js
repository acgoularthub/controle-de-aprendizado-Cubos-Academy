const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA")
} else if (totalDeRendimentos < 2000000) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEAO")
}

// testes \/

{
    //teste 1
    const aposentada = true;
    const portadoraDeDoenca = false;
    const totalDeRendimentos = 3000000; //emCentavos

    //seu código aqui
    if (aposentada === true || portadoraDeDoenca === true) {
        console.log("ISENTA")
    } else if (totalDeRendimentos < 2000000) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    } else {
        console.log("PEGA LEAO")
    }
}

{
    //teste 2
    const aposentada = false;
    const portadoraDeDoenca = true;
    const totalDeRendimentos = 3000000; //emCentavos

    //seu código aqui
    if (aposentada === true || portadoraDeDoenca === true) {
        console.log("ISENTA")
    } else if (totalDeRendimentos < 2000000) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    } else {
        console.log("PEGA LEAO")
    }
}

{
    //teste 3
    const aposentada = false;
    const portadoraDeDoenca = false;
    const totalDeRendimentos = 12000; //emCentavos

    //seu código aqui
    if (aposentada === true || portadoraDeDoenca === true) {
        console.log("ISENTA")
    } else if (totalDeRendimentos < 2000000) {
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    } else {
        console.log("PEGA LEAO")
    }
}