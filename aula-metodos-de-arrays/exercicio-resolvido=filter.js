const professores = [
        { nome: 'João', stack: 'backend' },
        { nome: 'Maria', stack: 'frontend' },
        { nome: 'José', stack: 'fullstack' },
        { nome: 'Joana', stack: 'backend' },
        { nome: 'Marcos', stack: 'frontend' },
        { nome: 'Julia', stack: 'fullstack' }
    ]
    // arrow function funciona assim: (parametro) => { return parametro }
const filtraProfessores = (stack, arrayDeProfessores) => {
    let resultado = arrayDeProfessores.filter((stackDoProfessor) => {
        return stackDoProfessor.stack === stack;
    });
    console.log(resultado);

}

filtraProfessores('backend', professores);