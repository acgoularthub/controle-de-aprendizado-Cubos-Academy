const idade = 30; // variável declarada num ecolpo geral
console.log(idade); // leitura da variável de escopo geral

{
    console.log(idade); // chamada de um escopo interno para uma variável de escopo externo
    const idade2 = 40; // variável declarada num escopo interno
    console.log(idade2); // leitura da variável de escopo interno
}

console.log(idade2); // chamada de um escopo externo para uma variável de escopo interno


// quando chamamos uma variável de um escopo interno a partir de um escopo externo, o JS não consegue 
//encontrar a variável e retorna um erro
//porém, variaveis de escopo global podem ser chamadas de escopos internos.