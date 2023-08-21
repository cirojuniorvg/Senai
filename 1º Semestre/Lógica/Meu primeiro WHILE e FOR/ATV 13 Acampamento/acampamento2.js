let dia = 0
let escalado, somaEscalado = 5360

do{
    
    escalado = Number(prompt('Quanto escaldu hoje?'))

    somaEscalado = somaEscalado + escalado

    alert(`${somaEscalado}`)

    dia++
    alert(`${dia}`)


}while(dia < 8 && somaEscalado < 8848)

if(somaEscalado = 8848 && dia < 8){
    alert(`Levaram ${dia} dias para chegar ao cume`)
}else{
    alert(`Volte`)
}