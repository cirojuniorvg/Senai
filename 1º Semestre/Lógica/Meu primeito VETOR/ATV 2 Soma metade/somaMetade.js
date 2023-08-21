let numeros = []
let addNum = []
let s1 = 0
let s2 = 0

for(i=0; i<10; i++){

    addNum = Number(prompt('Digite 10 numeros'))
    numeros.push(addNum)
}

s1 = Number(numeros[0]) + Number(numeros[1]) + Number(numeros[2]) + Number(numeros[3]) + Number(numeros[4])
s2 = Number(numeros[5]) + Number(numeros[6]) + Number(numeros[7]) + Number(numeros[8]) + Number(numeros[9])

alert(`${s1}\n${s2}\n${s2-s1}`)