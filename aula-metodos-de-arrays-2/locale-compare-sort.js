const pessoas = ['joão', 'Márcia', 'carlos', 'beatriz'];

// ordena o array de pessoas de acordo com a ordem alfabetica (crescente)
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

// ordena o array de pessoas de acordo com a ordem alfabetica (decrescente)
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);

// com o localeCompare, podemos ordenar strings de acordo com a ordem alfabetica do idioma
// do usuario, ou seja, se o usuario estiver usando o idioma ingles, o localeCompare ira
// ordenar as strings de acordo com a ordem alfabetica do idioma ingles, se o usuario estiver
// usando o idioma portugues, o localeCompare ira ordenar as strings de acordo com a ordem
// alfabetica do idioma portugues, e assim por diante