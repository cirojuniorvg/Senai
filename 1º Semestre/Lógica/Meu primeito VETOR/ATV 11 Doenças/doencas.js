let transmicao
let doenca
let vetorBacteria = []
let vetorVirus = []
let vetorAmbos = []
let vetorTodas = []

do{
    doenca = prompt('Digite a doença').toUpperCase()
    if(doenca == 'FINALIZAR'){
        break
    }
    vetorTodas.push(doenca)
    transmicao = prompt('Digite a transmissão da doença:\nVírus\nBactéria\nAmbos\nDigite finalizar ao preencher todas as doenças').toUpperCase()
    vetorDoenca.push(doenca)
    if(transmicao == 'BACTÉRIA'){
    vetorBacteria.push(doenca)
    }
    if(transmicao == 'VÍRUS'){
    vetorVirus.push(doenca)
    }
    if(transmicao == 'AMBOS'){
    vetorAmbos.push(doenca)
    }
}while(doenca != 'FINALIZAR')

alert(`Doenças transmitidas por bactéria: ${vetorBacteria}\nDoenças transmitidas por vírus: ${vetorVirus}\nDoenças transmitidas por ambos: ${vetorAmbos}\nTodas as doenças: ${vetorTodas}`)