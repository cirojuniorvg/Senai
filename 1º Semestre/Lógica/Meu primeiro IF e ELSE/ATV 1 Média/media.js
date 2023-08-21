let nota1, nota2, nota3, nota4, media

    nota1 = Number(prompt('Digite a nota 1'))
    nota2 = Number(prompt('Digite a nota 2'))
    nota3 = Number(prompt('Digite a nota 3'))
    nota4 = Number(prompt('Digite a nota 4'))

    media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
    
        if(media >= 7){

            alert(`Sua média é ${media}\nAprovado`)

        }else if( media <= 7 && media >= 5){

            alert(`Sua média é ${media}\nVocê está de Recuperação`)
        
        }else{

            alert(`Sua média é ${media}\nReprovado`)            

        }