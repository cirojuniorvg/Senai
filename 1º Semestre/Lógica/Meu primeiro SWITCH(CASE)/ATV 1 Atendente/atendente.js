let cliente

    cliente = prompt("Escolha uma opção:   \nA) Falar com a atendente \nB) Falar com o RH \nC) Falar com o gerente \nD) Sair").toUpperCase()

        switch(cliente){

            case 'A':           
            alert('Encaminhando atendente')
            break

            case 'B':
            alert('Encaminhando RH')
            break
            
            case 'C':
            alert('Encaminhando gerente')
            break
             
            case 'D':
            alert('Saiu')
            break
          
           default:
            alert('Escolha uma opção válida')
        }