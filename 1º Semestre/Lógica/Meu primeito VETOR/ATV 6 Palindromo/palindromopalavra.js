// Verifica se uma palavra digitada é palíndromo

let palavraDigitada
let vetorPalavra = []

    palavraDigitada = prompt("Digite uma palavra: ")

    vetorPalavra = palavraDigitada.split('')

    alert(vetorPalavra)

    let j = vetorPalavra.length-1
    let metadeVetor = Math.trunc(vetorPalavra.length/2)
    let palindromo = 0

    for(i=0; i < metadeVetor; i++){

        if(vetorPalavra[i] != vetorPalavra[j]){

            palindromo = 1

        }

        j--

    }

    if(palindromo == 1){

        alert("Não é palíndromo!")

    }else{

        alert("É palíndromo! :D")

    }



