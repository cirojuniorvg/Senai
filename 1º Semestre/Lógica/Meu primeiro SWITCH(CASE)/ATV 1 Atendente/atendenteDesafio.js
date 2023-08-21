let cliente

    Menu()

    function Menu() {
        
    cliente = prompt("Escolha uma opção:   \nA) Falar com a atendente \nB) Falar com o RH \nC) Falar com o gerente \nD) Sair").toUpperCase()

        switch(cliente){

            case 'A':
            
            alert('Encaminhando atendente')
            Menu()
            break

            case 'B':

            alert('Encaminhando RH')
            Menu()
            break
            
            case 'C':

            alert('Encaminhando gerente')
            Menu()
            break

            case 'D':
            alert('Saiu')
            break          

           default:

            alert('Escolha uma opção válida')
            Menu()
        }
    }