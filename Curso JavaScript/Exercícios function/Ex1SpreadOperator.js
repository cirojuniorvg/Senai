var funcionario = {

    nome: "Ciro",
    idade: 23,
    cargo: 'Programador',
    salario: 3000
}

const clonarFuncionario = funcionario => { return {...funcionario, nome: 'Leo', idade: 35}};
const novoFuncionario = clonarFuncionario(funcionario)


console.log("Novo funcionário", novoFuncionario)