let hotel = 65
let ocupado = 25
let livre
let cliente

    do{
        cliente = prompt('Saindo ou chegando').toUpperCase()
        
        if(cliente =='SAINDO'){
            ocupado = ocupado - 1
        
        }else if(cliente == 'CHEGANDO'){
        ocupado = ocupado + 1

        }else{
            alert('ESCOLHA UMA OPÇÃO VÁLIDA')
        }
        livre = hotel - ocupado
        alert(`O Hotel possui ${ocupado} leitos ocupados\nE ${livre} leitos livres`)
    }while(ocupado < hotel && livre < hotel)

    alert(`Todos os leitos estão ocupados`)
