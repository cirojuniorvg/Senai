let num

    for(i = 10; i > 0; i--){
    
        num = Number(prompt("Contagem Regressiva"))
    
        if(i != num){
        
            alert("Errou a sequência")
            break
        }
    
    }
    
    if(i == 0){
    
        alert("Acertou a contagem regressiva")
    
    }