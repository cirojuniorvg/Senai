let idade
let media, velho = 0
let somaIdade = 0

    prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))

    somaIdade = somaIdade + idade
        
    if(idade > velho){

        velho = idade
    }
        
    prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))
          
    somaIdade = somaIdade + idade

    if(idade > velho){
    
        velho = idade
    }

    prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))
                
    somaIdade = somaIdade + idade

        if(idade > velho){
        
            velho = idade
    }

    prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))
                    
    somaIdade = somaIdade + idade

        if(idade > velho){
            
            velho = idade
    }

    prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))
                        
    somaIdade = somaIdade + idade

        if(idade > velho){
                
            velho = idade
    }

        media = ((somaIdade) / 5).toFixed(2)

        alert(`A média de idade é ${media} e o mais velho tem ${velho} anos`)