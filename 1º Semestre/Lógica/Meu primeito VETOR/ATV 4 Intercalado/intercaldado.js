let v1 = [], addV1
let v2 = [], addV2
let v6 = []

for(i=0; i<3; i++){

    addV1 = Number(prompt("Digite um Número para a primeira lista:"))
        v1.push(addV1)

    addV2 = Number(prompt("Digite um Número para a segunda lista:"))
        v2.push(addV2)

        v6.push(addV1, addV2)
              
}

alert(`${v1}\n${v2}\n${v6}`)