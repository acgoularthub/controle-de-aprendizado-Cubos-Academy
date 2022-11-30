const texto = "eu gosto de batata, gosto de batata pra caramba";

// substituir o gosto por amo
const novoTexto = texto.replace("gosto", "amo");
console.log(novoTexto); // eu amo de batata, gosto de batata pra caramba
// o replace só substitui a primeira ocorrência da string indicada pela string indicada 
// para substituir todas as ocorrências, é necessário usar uma expressão regular
// substituir o gosto por amo
const novoTexto2 = texto.replace(/gosto/g, "amo");
console.log(novoTexto2); // eu amo de batata, amo de batata pra caramba