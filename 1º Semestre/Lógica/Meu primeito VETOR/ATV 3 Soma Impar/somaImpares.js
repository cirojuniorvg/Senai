let numeros = []
let addNum = []
let soma = 0

for(i=0; i<5; i++){

    addNum = Number(prompt("Digite um Número:"))
        if(addNum % 2 != 0){
        numeros.push(addNum)
        soma += addNum
        }
}

alert(`${numeros}\n${soma}`)

