const pessoas = [
    { nome: "Maria", idade: 30, profissao: "Engenheira" },
    { nome: "João", idade: 25, profissao: "Designer" },
    { nome: "Ana", idade: 35, profissao: "Professor" },
    { nome: "Sabrina", idade: 22, profissao: "Contadora" },
    { nome: "Ciro", idade: 14, profissao: "Desenvolvedor" }
];

//////// exemplo com reduce

const contasPagar = [
    { nome: "Aluguel", data: "2024-02-10", valor: 1500, situacao: "pendente" },
    { nome: "Energia", data: "2024-02-15", valor: 200, situacao: "pendente" },
    { nome: "Internet", data: "2024-02-20", valor: 100, situacao: "pendente" },
    { nome: "Água", data: "2024-02-25", valor: 80, situacao: "pendente" }
];

const totalAPagar = contasPagar.reduce(
    function(acumulador, conta){
        return acumulador + conta.valor
    }, 0);

console.log(totalAPagar);

//////////////////// exemplo filter

root = document.getElementById('root')

let pessoasMaduras = pessoas.filter(function(pessoa){
    return pessoa.idade >= 30 
})

console.log(pessoasMaduras)

pessoasMaduras.forEach(function(pessoa){
    let p = document.createElement('p')
   p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`
   
    p.setAttribute('class', 'exFilter')
    p.setAttribute('id', `pessoa${pessoas.indexOf(pessoa)}`)
    root.appendChild(p)
})

////////////////////////// exemplo for each


pessoas.forEach(function(pessoa){
    let p = document.createElement('p')
   p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`
   
    p.setAttribute('class', 'exForEach')
    p.setAttribute('id', `pessoa${pessoas.indexOf(pessoa)}`)
    root.appendChild(p)
})

//for(i=0; i<pessoas.length; i++){
//   let p = document.createElement('p')
//   p.textContent = `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade} - Profissão: ${pessoas[i].profissao}`
//   
//    p.setAttribute('class', 'pPessoa')
//    p.setAttribute('id', `pessoa${i}`)
//    root.appendChild(p)
//}


