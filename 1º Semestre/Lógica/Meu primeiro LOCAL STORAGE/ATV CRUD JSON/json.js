let vetorUser = []
let vetorSenha = []
let addUser = document.getElementById('inpUser')
let addSenha = document.getElementById('inpSenha')

function Cadastrar(){
    
    vetorUser = JSON.parse(localStorage.getItem('user'))
    vetorSenha = JSON.parse(localStorage.getItem('senha'))

    if(vetorUser == null){
        
        vetorUser = []

        vetorSenha = []

        vetorUser.push(addUser.value)
        localStorage.setItem('user', JSON.stringify(vetorUser))

        vetorSenha.push(addSenha.value)
        localStorage.setItem('senha', JSON.stringify(vetorSenha))
    
    }else{
       
        vetorUser.push(addUser.value)
        localStorage.setItem('user', JSON.stringify(vetorUser))

        vetorSenha.push(addSenha.value)
        localStorage.setItem('senha', JSON.stringify(vetorSenha))
    }}