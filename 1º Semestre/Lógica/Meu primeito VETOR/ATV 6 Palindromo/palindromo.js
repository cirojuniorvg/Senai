let numeros = []
let numeroAdd
let palindromo

for(i=0; i < 6; i++){
    

    numeroAdd = Number(prompt("Digite um número"))
    numeros.push(numeroAdd)

}

let j = 5

for(i=0; i < 3; i++){
    if(numeros[i] != numeros[j]){

        palindromo = 1
    }

    j--
}

if(palindromo ==1){
    alert('Nao é palindromo')
}else{
    alert('É palindromo')
}