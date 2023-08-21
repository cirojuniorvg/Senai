let vagaTotal = 130, leitosIndisponiveis = vagaTotal/2, limitacao = 25
let leitosDisponiveis = vagaTotal - leitosIndisponiveis - limitacao
let entradaSaida

while(leitosDisponiveis >= 0){
    
    entradaSaida = Number(prompt('Quantos hospedes entram ou saem'))

    if(entradaSaida >= 0){

        leitosDisponiveis = leitosDisponiveis - entradaSaida 
    }else{

        if(leitosDisponiveis == 40){
            
            alert('Nao pode haver vagas')
        }else{

        leitosDisponiveis = leitosDisponiveis + entradaSaida
    
    }
    }
    }

alert(`Nao é possivel pois excede o numero de leitos em ${(leitosDisponiveis -(-1))}`)

