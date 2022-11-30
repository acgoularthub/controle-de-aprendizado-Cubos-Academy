// o metodo slice retorna uma parte da string 
// funciona assim: texto.slice(inicio, fim)

const texto = "Cubos Academy";

console.log(texto.slice(0, 5)); // Cubos
console.log(texto.slice(6, 13)); // Academy
console.log(texto.slice(6)); // Academy 
console.log(texto.slice(-7)); // Academy
console.log(texto.slice(0, -1)); // Cubos Academ