const palavra = "Paralelepipedo";
let encontrou = false;
let qualLetra = "i";

for (let letra of palavra) {
    if (letra === qualLetra) {
        console.log(`Achei a letra ${qualLetra}`);
        encontrou = true;
        break;
    }
}

if (!encontrou) {
    console.log(`Não achei a letra ${qualLetra}`);
}