let coresP = []
let addCores
let coresS = []
let PS = []


for(i=0; i < 3; i++){

    addCores = prompt('Cor primaria')
    coresP.push(addCores)

}

for(i=0; i < 3; i++){

    addCores = prompt('Cor Secundaria')
    coresS.push(addCores)

}

    PS.push(coresP, coresS)

    addCores = prompt('Adicionar no inicio')
    PS.unshift(addCores)
    
    addCores = prompt('Adicionar no final')
    PS.push(addCores)

    alert(PS)
