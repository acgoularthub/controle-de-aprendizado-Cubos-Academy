// assim como em vária outras linguagens, o js não é tipado
// e o tipo da variável é definido no momento da atribuição

let idade = 33; // number

console.log(idade);

let alturaEmMetros = 1.75; // número decimal (float ou double)

console.log(alturaEmMetros);

//string template
console.log(`A idade é ${idade} e a altura é ${alturaEmMetros}`);

// var é uma variável global enquanto let é uma variável local, ou seja, dentro de um escopo
// na prática, o let é mais seguro que o var pois não permite que uma variável seja redeclarada