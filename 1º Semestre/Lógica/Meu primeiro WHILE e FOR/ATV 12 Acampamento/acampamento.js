let partida = 5360, escalado, alturaEscalada, cume = 8848
let dia = 0

for(i = 0; i < 8; i++){
    
    escalado = Number(prompt('Digite quanto escalou'))

    alturaEscalada = escalado + partida
    partida = partida + escalado

    dia++
    if(alturaEscalada < cume && i == 8){
        alert('Você deve voltar, pois corre risco de ficar sem oxigênio')
    }
    if(alturaEscalada >= cume && i < 8){
        alert(`Você levou ${i} dias para chegar ao cume`)
    }
    
}