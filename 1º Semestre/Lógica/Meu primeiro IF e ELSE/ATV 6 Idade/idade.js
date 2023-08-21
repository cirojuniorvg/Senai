let n1, n2, n3, n4, n5
let i1, i2, i3, i4, i5
let media

    n1 = prompt('Seu Nome')
    i1 = Number(prompt('Sua Idade'))
    
    n2 = prompt('Seu Nome')
    i2 = Number(prompt('Sua Idade'))

    n3 = prompt('Seu Nome')
    i3 = Number(prompt('Sua Idade'))

    n4 = prompt('Seu Nome')
    i4 = Number(prompt('Sua Idade'))

    n5 = prompt('Seu Nome')
    i5 = Number(prompt('Sua Idade'))

        media = ((i1 + i2 + i3 + i4 + i5)/5).toFixed(2)

            if(i1 > i2 && i1 > i3 && i1 > i4 && i1 > i5){

                alert(`A média de idade é ${media} e o mais velho é ${n1}`)

            }else if(i2 > i1 && i2 > i3 && i2 > i4 && i2 > i5){

                alert(`A média de idade é ${media} e o mais velho é ${n2}`)

            }else if(i3 > i2 && i3 > i1 && i3 > i4 && i3 > i5){

                alert(`A média de idade é ${media} e o mais velho é ${n3}`)

            }else if(i4 > i1 && i4 > i2 && i4 > i3 && i4 > i5){

                alert(`A média de idade é ${media} e o mais velho é ${n4}`)

            }else{

                alert(`A média de idade é ${media} e o mais velho é ${n5}`)               
           
            }
