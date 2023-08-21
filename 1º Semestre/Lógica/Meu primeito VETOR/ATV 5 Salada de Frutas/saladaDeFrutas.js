let salada = []
let addSalada = []

do{
    addSalada = prompt('Qual fruta adicionar?\nDigite Cereja para finalizar').toUpperCase()
    salada.push(addSalada)

    }while(addSalada != 'CEREJA')

alert(`${salada}`)