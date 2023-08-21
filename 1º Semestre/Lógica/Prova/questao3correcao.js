let pergunta, totalPontos = 0 

    alert("HELLO STRANGERRRRR! :D")

    pergunta = prompt("Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing (3 pontos)\nB) Castlevania (3 pontos)\nC) The Vampire Diaries (2 pontos)\nD) Blade: The Series (1 ponto)\n").toUpperCase()

    switch(pergunta){

        case 'A':

            totalPontos += 3
            break

        case 'B':

            totalPontos += 3
            break

        case 'C':

            totalPontos += 2
            break

        case 'D':

            totalPontos += 1
            break

        default:

            alert("Alternativa inválida, você ganhou maravilhosos 0 pontos!")

    }

    pergunta = prompt("Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas (3 pontos)\nB) O Hobbit (2 pontos)\nC) A Fantástica Fábrica de Chocolates (3 pontos)\nD) Coraline (2 pontos)\n").toUpperCase()

    switch(pergunta){

        case 'A':

            totalPontos += 3
            break

        case 'B':

            totalPontos += 2
            break

        case 'C':

            totalPontos += 3
            break

        case 'D':

            totalPontos += 2
            break

        default:

            alert("Alternativa inválida, você ganhou maravilhosos 0 pontos!")

    }

    pergunta = prompt("Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda (3 pontos)\nB) Kirby (2 pontos)\nC) Metroid (2 pontos)\nD) Super Mario Bros (4 pontos)\n").toUpperCase()

    switch(pergunta){

        case 'A':

            totalPontos += 3
            break

        case 'B':

            totalPontos += 2
            break

        case 'C':

            totalPontos += 2
            break

        case 'D':

            totalPontos += 4
            break

        default:

            alert("Alternativa inválida, você ganhou maravilhosos 0 pontos!")

    }

    if(totalPontos == 10){

        alert(`Total de Pontos: ${totalPontos}. Parabãããããã~~ains`)

    }else{

        alert(`Total de Pontos: ${totalPontos}.`)

    }