let resposta
let vampiro, fantasia, nintendo
let soma = 0

alert('╔════•ೋೋ•════╗\n      QUIZ NERD\n╚════•ೋೋ•════╝')

vampiro = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series').toUpperCase()

switch(true){

    case vampiro == 'A' || vampiro == 'B':
    soma = soma + 3
    alert(`+${soma} pontos`)
    break

    case vampiro == 'C':
        soma = soma + 2
    alert(`+${soma} pontos`)
    break

    case vampiro == 'D':
        soma = soma + 1
    alert(`+${soma} pontos`)
    break

    default:
        alert('+0 pontos')

}

fantasia = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas\nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates\nD) Coraline').toUpperCase()

switch(true){

    case fantasia == 'A' || fantasia == 'C':
    soma = soma + 3
    alert(`+${soma} pontos`)
    break

    case fantasia == 'A' || fantasia == 'D':
        soma = soma + 2
    alert(`+${soma} pontos`)
    break

    default:
        alert('+0 pontos')

}

nintendo = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros').toUpperCase()

switch(true){

    case nintendo == 'C' || nintendo == 'B':
    soma = soma + 2
    alert(`+${soma} pontos`)
    break

    case nintendo == 'D':
        soma = soma + 4
    alert(`+${soma} pontos`)
    break

    case nintendo == 'A':
        soma = soma + 3
    alert(`+${soma} pontos`)
    break

    default:
        alert('+0 pontos')

}

switch(true){
    case soma == 10:

    alert('Parabéns fez 10 pontos')
    break

    case soma < 10 && soma > 0:
        alert(`Fez ${soma} pontos`)
        break

    default:
        alert('FEZ 0 PONTOS?')

}