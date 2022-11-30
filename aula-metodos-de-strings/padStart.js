// O método padStart() adiciona caracteres no início da string 

const ultimosQuatroDigitos = "1234";

const cartaoMascarado = ultimosQuatroDigitos.padStart(19, "**** ");

console.log(cartaoMascarado); // ************1234