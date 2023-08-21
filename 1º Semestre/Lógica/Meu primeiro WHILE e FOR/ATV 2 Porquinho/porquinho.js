let valorMoeda
let saldo = 0
let m1 = 0, m5 = 0, m10 = 0, m25 = 0, m50 = 0

alert('Bem vindo ao Porkito')

do{
    valorMoeda = Number(prompt('ESCOLHA O valor da moeda \n1 cent \n5 cents \n10 cents \n25 cents \n50 cents '))

    switch(valorMoeda){
    
    case 1:
        saldo+=1
        m1++
        break

    case 5:
        saldo+=5
        m5++
        break
    
    case 10:
        saldo+=10
        m10++
        break

    case 25:
        saldo+=25
        m25++
        break

    case 50:
        saldo+=50
        m50++
        break

    }

    }while(valorMoeda != 0)

alert(`Saldo final: ${saldo} centavos\n${m1} moedas de 1 cent  \n${m5} moedas de 5 cents  \n${m10} moedas de 10 cents \n${m25} moedas de 25 cents \n${m50} moedas de 50 cents `)