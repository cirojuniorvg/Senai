let produto = document.getElementById('inpProduto')
let marca = document.getElementById('inpMarca')
let valor = document.getElementById('inpValor')

let alterarNome = document.getElementById('inpAlterarProduto')
let alterar = document.getElementById('inpAlterarValor')

let deletar = document.getElementById('inpDeletar')

let vetor = []

function Cadastrar() {
    
    let cadastro = {

    nome:'',
    fornecedor:'',
    preco:''
}
    cadastro.nome = produto.value
    cadastro.fornecedor = marca.value
    cadastro.preco = valor.value

    vetor = JSON.parse(localStorage.getItem('produtosLoja'))

    if(vetor == null){
        vetor = []

        vetor.push(cadastro)
        localStorage.setItem('produtosLoja', JSON.stringify(vetor))
    }else{

    vetor.push(cadastro)
    localStorage.setItem('produtosLoja', JSON.stringify(vetor))

    
}
LimpaInputs()
    Lista()
}

function Lista(){

    let lista = ''
    vetor = JSON.parse(localStorage.getItem('produtosLoja'))

    if(vetor == null){
        lista = 'Não existe usuários cadastrados'
    }else{

    for(i=0; i<vetor.length; i++){

        lista = lista + Object.values(vetor[i]).join(' - ') + '<br>'
    }

    }
    document.getElementById('Lista').innerHTML = lista

}

function AlterarValor(){
        
    vetor = JSON.parse(localStorage.getItem('produtosLoja'))

            for(i=0; i < vetor.length; i++){
            
                if(alterarNome.value == vetor[i].nome){
                
                    vetor[i].preco = alterar.value
                    localStorage.setItem('produtosLoja', JSON.stringify(vetor))
                
                }
            
            }
            
            alterar.value = ''
            alterarNome.value = ''
            Lista()

}

function Deletar(){

    vetor = JSON.parse(localStorage.getItem('produtosLoja'))

    for(i=0; i < vetor.length; i++){
    
        if(deletar.value == vetor[i].nome){
        
            vetor.splice(i,1)
            localStorage.setItem('produtosLoja', JSON.stringify(vetor))
        
        }
    
    }
    deletar.value = ''

    Lista()
}

function LimpaInputs(){

    produto.value = ''
    marca.value = ''
    valor.value = ''
}