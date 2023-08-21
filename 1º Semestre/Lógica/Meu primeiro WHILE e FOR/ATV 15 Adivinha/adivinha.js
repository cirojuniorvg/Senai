let num, secreto = 45, tentativas = 0

while(num != secreto) {

    num = Number(prompt('Tente acertar o segredo'))

    if(num > secreto && num > 0 && num < 100){
        alert('O seu número é maior que o segredo')
        tentativas++
    }
    
    if (num < secreto && num > 0 && num < 100){

        alert('O seu número é menor que o segredo')
        tentativas++
    }

    if(num < 0 || num > 100){

        alert('Número invalido')
        tentativas++
}
}

alert(`Acertou o segredo\nLevaram ${tentativas++} chutes para o acerto`)