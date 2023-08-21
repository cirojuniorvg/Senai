let vetor = []
let addNome = document.getElementById("inpCadastro")
let excluirNome = document.getElementById("inpExcluir")
let editarNome = document.getElementById("inpEditar")
let verificarNome = document.getElementById("inpVerificar")


    function Cadastro(){

            vetor.push(addNome.value)
            alert("Cadastrado")
            addNome.value = ''
        }

    function Excluir(){

                for(i=0; i < vetor.length; i++){
                
                    if(excluirNome.value == vetor[i]){
                    
                        vetor.splice(i,1)
                    
                    }
                
                }
                excluirNome.value = ''
    }

    function Editar(){
        
        let novoNome = document.getElementById("inpEditar")

                for(i=0; i < vetor.length; i++){
                
                    if(addNome.value == vetor[i]){
                    
                        vetor.splice(i,1,novoNome.value)
                    
                    }
                
                }
                editarNome.value = ''
                addNome.value = ''

    }

    function Verificar(){
        let provaReal
        provaReal = vetor.includes(verificarNome.value)

        if(provaReal == true){
            verificarNome.value = ''
            alert('Usuário existe')
        
        }else{
            verificarNome.value = ''
            alert('Usuário não existe')
        
        }
}
    

    function Lista(){

        alert(`Todos os Nomes cadastrados são: ${vetor}`)

    }