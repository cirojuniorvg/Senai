let pessoa1 = {

    nome: 'Maria',
    idade: 17

}

let pessoa2 = {

    nome: 'Joao',
    idade: 16

}

function maiorIdade(){

    if(pessoa1.idade > pessoa2.idade){

        console.log(pessoa1.nome)

    }else{

        console.log(pessoa2.nome)
    }


}

maiorIdade()