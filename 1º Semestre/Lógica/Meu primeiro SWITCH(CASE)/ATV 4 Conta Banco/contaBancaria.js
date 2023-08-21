let operacao, deposito, saque
let saldo = 10000

operacao = prompt('Escolha uma opção \n1-SALDO \n2-DEPÓSITO \n3-SAQUE')

switch(operacao){

    case '1':
        alert(`Seu saldo é de R$${saldo}`)
        break

    case '2':
        valorMoeda = Number(prompt('Quanto a ser depositado?'))
        saldo = saldo + valorMoeda
        alert(`Seu saldo atual é de R$${saldo}`)
        break
    
    case '3':
        
        saque = Number(prompt('Quanto a ser sacado'))
        saldo = saldo - saque
        alert(`Seu saldo atual é de R$${saldo}`)

    default:

        alert('Escolha uma opção válida')
}