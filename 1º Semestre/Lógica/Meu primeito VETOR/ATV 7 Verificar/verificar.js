let numero = []
let addNum
let verificar, indice = []

for(i=0; i < 10; i++){

    addNum = Number(prompt('Digite Número:'))
    numero.push(addNum)

}

verificar = Number(prompt('Qual Número verificar'))

for(i=0; i < numero.length; i++){

    if(numero[i] == verificar)

    indice.push(i)
}
alert(indice)