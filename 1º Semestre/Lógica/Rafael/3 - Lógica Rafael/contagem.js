let vetorNumeros = []
let numeros
let quantidade = 0
let saber = Number(prompt('Saber'))
for (i=0; i<10; i++) {

    numeros = Math.random()*10
    numeros = Math.round(numeros)
    vetorNumeros.push(numeros)
    
}

for(j=0; j < vetorNumeros.length; j++){

    if(saber == vetorNumeros[j])
    quantidade++
}
console.log(vetorNumeros)
console.log(quantidade)