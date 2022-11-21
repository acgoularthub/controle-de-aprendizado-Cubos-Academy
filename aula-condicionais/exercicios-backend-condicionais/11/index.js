// exemplo a)

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 1800000) {
    console.log("Aluno não deve mais nada");
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (rendaMensalEmCentavos >= 200000) {
    console.log(`O valor da parcela desse mês é de R$${(rendaMensalEmCentavos*0.18)/100} reais`);
}

// exemplo b)
{
    //renda mensal do aluno, em centavos.
    const rendaMensalEmCentavos = 150000;

    // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
    const mesesDecorridos = 12;

    // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
    const totalJaPagoPeloAluno = 1000000;

    if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 1800000) {
        console.log("Aluno não deve mais nada");
    } else if (rendaMensalEmCentavos < 200000) {
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
    } else if (rendaMensalEmCentavos >= 200000) {
        console.log(`O valor da parcela desse mês é de R$${(rendaMensalEmCentavos*0.18)/100} reais`);
    }
}