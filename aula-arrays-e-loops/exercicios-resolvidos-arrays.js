const paises = ['brasil', 'argentina', 'chile', 'peru', 'bolivia'];

// adicione um novo país no final do array
paises.push('uruguai');
console.log(paises);

// remova o último país do array
paises.pop();
console.log(paises);

// adicione um novo país no início do array
paises.unshift('uruguai');
console.log(paises);

// remova o primeiro país do array
paises.shift();
console.log(paises);

// imprima o ultimo país do array
console.log(paises[paises.length - 1]);

// imprima o segundo país do array
console.log(paises[1]);

// imprima o país de indice 2
console.log(paises[2]);