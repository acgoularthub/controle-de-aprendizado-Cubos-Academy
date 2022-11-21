const usuarios = [{
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [];
const adultos = [];

for (let pessoa of usuarios) {
    if (pessoa.idade >= 18) {
        adultos.push({...pessoa });
    }
    if (pessoa.idade < 18) {
        jovens.push({...pessoa });
    }
}

console.log(jovens);
console.log("------------------");
console.log(adultos);