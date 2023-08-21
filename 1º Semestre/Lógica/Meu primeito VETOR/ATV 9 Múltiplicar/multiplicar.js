let vetorNumeros = []
let addNumeros
let maiorNumero = 0
let multiplicar, somaDaMultiplicacao = 0
let vetorMultiplicar = []

for(i=0; i < 5; i ++){
    addNumeros = Number(prompt('Digite um Número:'))
    vetorNumeros.push(addNumeros)
    if(maiorNumero < addNumeros){
        maiorNumero = addNumeros
    }
}

for(i=0; i < 5; i ++){

    if(maiorNumero != vetorNumeros[i]){
        multiplicar = maiorNumero * vetorNumeros[i]
        somaDaMultiplicacao = somaDaMultiplicacao + multiplicar
    }
}
alert(somaDaMultiplicacao)