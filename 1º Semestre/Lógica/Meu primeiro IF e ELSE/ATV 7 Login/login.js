let nome, senha

    nome = prompt('Digite o Username')
    senha = prompt('Digite o password')

        if(nome == 'admin' && senha == 123){

            alert("Login efetuado")

        }else if(nome != "admin"){

            alert('Seu Username não corresponde')

        }else if(senha != 123){

            alert('Sua senha não corresponde')

        }else{

            alert("Login falhou senha e username não correspondem")

        }