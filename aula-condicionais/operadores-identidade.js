let identico = 25 === 25; // true
console.log(identico);

identico = 25 === '25'; // false
console.log(identico);

identico = 25 !== '25'; // true
console.log(identico);

identico = 25 !== 25; // false
console.log(identico);

identico = 25 !== 16; // true
console.log(identico);

// o operador de identidade === é mais restrito que o operador de igualdade ==