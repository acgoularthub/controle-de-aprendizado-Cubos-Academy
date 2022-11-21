const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
/*
if (jogada1 === jogada2) {
  console.log("empate")
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
  console.log("pedra")
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
  console.log("pedra")
} else if (jogada1 === "papel" && jogada2 === "pedra") {
  console.log("papel")
} else if (jogada1 === "pedra" && jogada2 === "papel") {
  console.log("papel")
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
  console.log("tesoura")
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
  console.log("tesoura")
} else {
  console.log("jogada invalida")
} */

if (jogada1 === jogada2) {
    console.log("empate")
} else if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("pedra")
} else if (jogada1 === "papel" && jogada2 === "pedra" || jogada1 === "pedra" && jogada2 === "papel") {
    console.log("papel")
} else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("tesoura")
} else {
    console.log("jogada invalida")
}

{
    //teste 1
    const jogada1 = "papel"
    const jogada2 = "pedra"

    if (jogada1 === jogada2) {
        console.log("empate")
    } else if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
        console.log("pedra")
    } else if (jogada1 === "papel" && jogada2 === "pedra" || jogada1 === "pedra" && jogada2 === "papel") {
        console.log("papel")
    } else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
        console.log("tesoura")
    } else {
        console.log("jogada invalida")
    }
}

{
    //teste 2
    const jogada1 = "papel"
    const jogada2 = "tesoura"

    if (jogada1 === jogada2) {
        console.log("empate")
    } else if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
        console.log("pedra")
    } else if (jogada1 === "papel" && jogada2 === "pedra" || jogada1 === "pedra" && jogada2 === "papel") {
        console.log("papel")
    } else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
        console.log("tesoura")
    } else {
        console.log("jogada invalida")
    }
}