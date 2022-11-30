const texto = "Cubos Academy";

// métodos de strings são funções que podem ser chamadas a partir de uma string
// o método .length retorna o tamanho da string (quantidade de caracteres) 
console.log(texto.length); // 13

// documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

// o método .toUpperCase() retorna a string em caixa alta
console.log(texto.toUpperCase()); // CUBOS ACADEMY

// o método .toLowerCase() retorna a string em caixa baixa
console.log(texto.toLowerCase()); // cubos academy

// o método .charAt() retorna o caractere na posição indicada
console.log(texto.charAt(0)); // C
console.log(texto.charAt(1)); // u
console.log(texto.charAt(2)); // b
console.log(texto.charAt(3)); // o
console.log(texto.charAt(4)); // s
console.log(texto.charAt(5)); //

// o método .indexOf() retorna a posição do caractere indicado
console.log(texto.indexOf("A")); // 6
console.log(texto.indexOf("a")); // 7

// o método .includes() retorna true se a string contém o caractere indicado
console.log(texto.includes("A")); // true
console.log(texto.includes("a")); // true

// o método .replace() substitui o caractere indicado pelo caractere indicado
console.log(texto.replace("Cubos", "Cubos Academy")); // Cubos Academy Academy

// o método .split() divide a string em um array de strings
console.log(texto.split(" ")); // [ 'Cubos', 'Academy' ]

// o método .trim() remove espaços em branco no início e no fim da string
console.log("   Cubos Academy   ".trim()); // Cubos Academy

// o método .repeat() repete a string a quantidade de vezes indicada
console.log(texto.repeat(3)); // Cubos AcademyCubos AcademyCubos Academy

// o método .slice() retorna uma parte da string
console.log(texto.slice(0, 5)); // Cubos

// o método .substr() retorna uma parte da string
console.log(texto.substr(0, 5)); // Cubos

// o método .substring() retorna uma parte da string
console.log(texto.substring(0, 5)); // Cubos

// o método .padStart() adiciona caracteres no início da string
console.log(texto.padStart(20, "Cubos Academy")); // Cubos AcademyCubos Academy

// o método .padEnd() adiciona caracteres no fim da string
console.log(texto.padEnd(20, "Cubos Academy")); // Cubos AcademyCubos Academy

// o método .concat() concatena strings
console.log(texto.concat(" ", "Cubos Academy")); // Cubos Academy Cubos Academy

// o método .endsWith() retorna true se a string termina com o caractere indicado
console.log(texto.endsWith("y")); // true

// o método .startsWith() retorna true se a string começa com o caractere indicado
console.log(texto.startsWith("C")); // true

// o método .match() retorna um array com as ocorrências da string indicada
console.log(texto.match(/a/g)); // [ 'a', 'a', 'a' ]

// o método .search() retorna a posição da primeira ocorrência da string indicada
console.log(texto.search("a")); // 7

// o método .replace() substitui a string indicada pela string indicada
console.log(texto.replace("a", "A")); // Cubos Academy

// o método .replace() substitui a string indicada pela string indicada
console.log(texto.replace(/a/g, "A")); // Cubos AcAdemy

// o método .replace() substitui a string indicada pela string indicada
console.log(texto.replace(/a/gi, "A")); // Cubos AcAdemy

// o método .replace() substitui a string indicada pela string indicada
console.log(texto.replace(/a/gi, "A").replace(/A/g, "a")); // Cubos academy

// o método .replace() substitui a string indicada pela string indicada
console.log(texto.replace(/a/gi, "A").replace(/A/g, "a").replace(/a/g, "A")); // Cubos Academy