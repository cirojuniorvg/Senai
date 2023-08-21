let num, fat = 1

    num = Number(prompt('Digite um número para fatorar'))

    for(i = num; i > 0; i--){
        
        fat = fat * num
        num--
    }
    
    alert(fat)