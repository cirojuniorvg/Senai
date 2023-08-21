let quantidadeMulta
let pontoMulta, pontoFinal = 0
let valorMulta, valorFinal = 0

quantidadeMulta = Number(prompt('Quantas multas você possui?'))

for(i = 0; i < quantidadeMulta; i++){

    valorMulta = Number(prompt('Digite o valor da multa'))
    valorFinal = valorFinal + valorMulta

    pontoMulta = Number(prompt('Quantos pontos tem a multa?'))
    pontoFinal = pontoFinal + pontoMulta

}

if(pontoFinal >= 21){
    
    alert(`O valor das multas somados é ${valorFinal}\nVocê possui ${pontoFinal} pontos\nVocê está irregular`)

}else{

       alert(`O valor das multas somados é ${valorFinal}\nVocê possui ${pontoFinal} pontos\nVocê está regular`)
}
