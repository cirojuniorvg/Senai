let operacao, deposito, saque, conta
let saldo = 10000

conta = prompt('Digite o número da conta')

Menu()

function Menu() {

    operacao = prompt('Escolha uma opção \n1-SALDO \n2-DEPÓSITO \n3-SAQUE \n 4-SAIR')

    switch (operacao) {

        case '1':
            alert(`Seu saldo é de R$${saldo}`)
            Menu()
            break
            

        case '2':
            valorMoeda = Number(prompt('Quanto a ser depositado?'))
            
            saldo = saldo + valorMoeda
            
            alert(`Seu saldo atual é de R$${saldo}`)
            Menu()
            break
           

        case '3':

            saque = Number(prompt('Quanto a ser sacado'))

            if (saque <= saldo) {

                saldo = saldo - saque

                alert(`Seu saldo atual é de R$${saldo}`)
                Menu()

            }else{
                
                alert('Seu saque é maior que o saldo da conta')
                Menu()
            }
            break

        case '4':

            alert('Saiu')
            break

        default:

            alert('Escolha uma opção válida')
            Menu()
    }
}