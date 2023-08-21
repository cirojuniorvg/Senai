let frete = 12.50
let assinante
let valorCompra, vaiPagar

valorCompra = Number(prompt('Valor da compra'))
assinante = Number(prompt('Digite seu nível de assinante \n1- PREMIUM\n2-GOLD\n3-SILVER\n4-NENHUM'))

switch(assinante){

    case 1:
        vaiPagar = (valorCompra * 0.80)
        alert(`Você irá pagar R$${vaiPagar}`)
       break
    
    case 2:
        vaiPagar = (valorCompra * 0.80) + frete
        alert(`Você irá pagar R$${vaiPagar}`)
       break
    
    case 3:
        vaiPagar = (valorCompra * 0.90) + frete
        alert(`Você irá pagar R$${vaiPagar}`)
       break

    case 4:
        vaiPagar = valorCompra + frete
        alert(`Você irá pagar R$${vaiPagar}`)
        break

    default:
        alert('Escolha uma opção válida')

}