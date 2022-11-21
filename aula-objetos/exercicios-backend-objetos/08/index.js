const usuarios = [{
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {

    console.log(`Sou ${usuario.nome} e ${usuario.pets.length > 0 ? `tenho ${usuario.pets.length} ${usuario.pets.length === 1 ? `pet` : `pets`}` : `não tenho pets`}`);
}