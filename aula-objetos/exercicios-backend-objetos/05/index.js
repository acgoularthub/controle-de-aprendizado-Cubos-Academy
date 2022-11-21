/*
Um novo curso foi criado e suas aulas precisam ser cadastradas. 
Abaixo temos o objeto curso, que possui uma propriedade chamada aulas. 
Sua tarefa é adicionar a lista de aulas abaixo na propriedade aulas do objeto curso.
Lista de aulas
Aula 01

Identificador = 01
Nome da aula = Introdução a programação
Aula 02

Identificador = 02
Nome da aula = Variáveis
Aula 03

Identificador = 03
Nome da aula = Condicionais
Aula 04

Identificador = 04
Nome da aula = Arrays
*/

const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const aulas = [{
        id: 01,
        nome: "Introdução a programação"
    },
    {
        id: 02,
        nome: "Variáveis"
    },
    {
        id: 03,
        nome: "Condicionais"
    },
    {
        id: 04,
        nome: "Arrays"
    }
]

curso.aulas = aulas;

console.log(curso);