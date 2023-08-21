/*let livro = {

    titulo: 'Jurassic Park',
    autor: 'Michael Chricton',
    editora: 'Rocco',
    paginas: 489,

}


livro.copias = 5
delete livro.paginas
//livro.titulo = 'Mundo Perdido'

alert(Object.values(livro))
//alert(`${Object.entries(livro)}\n${Object.keys(livro)}\n${Object.values(livro)}`)

let carro = {

    nome: '',
    marca: '',
    ano: '',

}

    carro.nome = prompt('Digite o nome do carro')
    carro.marca = prompt('Digite a marca do carro')
    carro.ano = Number(prompt('Digite o ano do carro'))

    alert(Object.values(carro))
    */

let nome = document.getElementById('inputNome')
let senha = document.getElementById('inputSenha')
let usuario = {

    username:'',
    password:''

}

function CadastraUser(){

    usuario.username = nome.value
    usuario.password = senha.value

    alert(Object.values(usuario))

}