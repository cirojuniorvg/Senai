let numero, maior = 0, menor = 51

for(i = 0; i < 5; i++){
    
    numero = Number(prompt('Digite cinco números de 0 à 50'))
        if(numero > 50 && numero < 0){
            
            alert('Número Invalido')
        }
        if(numero > maior){
            maior = numero

        }

        if(numero < menor){
            menor = numero
        
        }
    }
alert(`O maior numero foi ${maior}\nO menor numero foi ${menor} `)