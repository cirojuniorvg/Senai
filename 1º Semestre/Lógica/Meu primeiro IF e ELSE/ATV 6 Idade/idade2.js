let n1, n2, n3, n4, n5
let i1, i2, i3, i4, i5
let media, velho = 0

    n1 = prompt('Seu Nome')
    i1 = Number(prompt('Sua Idade'))
        
        if(i1 > velho){

            velho = i1
        }
        
    n2 = prompt('Seu Nome')
    i2 = Number(prompt('Sua Idade'))
    
        if(i2 > velho){

        velho = i2
        }

    n3 = prompt('Seu Nome')
    i3 = Number(prompt('Sua Idade'))
    
        if(i3 > velho){

        velho = i3
    }
    n4 = prompt('Seu Nome')
    i4 = Number(prompt('Sua Idade'))
        
        if(i4 > velho){

        velho = i4
        }
    n5 = prompt('Seu Nome')
    i5 = Number(prompt('Sua Idade'))
        
        if(i5 > velho){

        velho = i5
        }

        media = ((i1 + i2 + i3 + i4 + i5)/5).toFixed(2)

        alert(`A média de idade é ${media} e o mais velho tem ${velho} anos`)