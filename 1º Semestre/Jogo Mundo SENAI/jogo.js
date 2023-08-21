let imagemJogador = document.getElementById("imgJogador")
let imagemSistema = document.getElementById("imgSistema")

let resultadoJogo = document.getElementById("lbResultado")

let rodadasJogo = document.getElementById("lbRodadas")
let jogadorPts = document.getElementById("lbJogadorPts")
let sistemaPts = document.getElementById("lbSistemaPts")

let botaoJogar = document.getElementById("btnJogar")
let botaoReiniciar = document.getElementById("btnReiniciar")

let jogadorPontos = 0
let sistemaPontos = 0
let rodadasTotal = 0

let indiceImgJogador = 0
let indiceImgSistema = 0

let efeitoConfirma = document.getElementById("somConfirma")
let efeitoSeleciona = document.getElementById("somSeleciona")


function trocaImagem(){

    if(botaoJogar.disabled == false){

        efeitoSeleciona.play()

    switch(indiceImgJogador){

        case 0:

            imagemJogador.src = "Imagens/rock-img-new.png"
            indiceImgJogador = 1
            break
    

        case 1:

            imagemJogador.src = "Imagens/paper-img-new.png"
            indiceImgJogador = 2
            break

        case 2:

            imagemJogador.src = "Imagens/scissor-img-new.png"
            indiceImgJogador = 3
            break
        
        case 3:

            imagemJogador.src = "Imagens/rock-img-new.png"
            indiceImgJogador = 1
            break
}
}
}

function Jogar(){

    if(indiceImgJogador != 0){

        efeitoConfirma.play()

    indiceImgSistema = Math.floor(Math.random() * (3) + 1)

    switch(indiceImgSistema){

        case 1:

            imagemSistema.src = "Imagens/rock-img-new.png"
            break

        case 2:
  
        imagemSistema.src = "Imagens/paper-img-new.png"
            break

        case 3:

            imagemSistema.src = "Imagens/scissor-img-new.png"
            break
}
    Resultado()
    botaoJogar.disabled = true
}
}

// 1 - Pedra, 2 - Papel, 3 - Tesoura

function Resultado(){

    rodadasTotal++
    rodadasJogo.innerHTML = `Rodadas = ${rodadasTotal}`
    
    if(rodadasTotal == 5){

        botaoReiniciar.disabled = true

    }

    if(indiceImgJogador == indiceImgSistema){

        resultadoJogo.innerHTML = `Empate :S`

    }

    if(indiceImgJogador == 1 && indiceImgSistema == 2 || indiceImgJogador == 3 && indiceImgSistema == 1 || indiceImgJogador == 2 && indiceImgSistema == 3 ){

        sistemaPontos++
        sistemaPts.innerHTML = `Sistema =  ${sistemaPontos}`
        resultadoJogo.innerHTML = `Sistema VENCEU :(`

    }

    if(indiceImgJogador == 2 && indiceImgSistema == 1 || indiceImgJogador == 1 && indiceImgSistema == 3 || indiceImgJogador == 3 && indiceImgSistema == 2 ){

        jogadorPontos++
        jogadorPts.innerHTML = `Jogador =  ${jogadorPontos}`
        resultadoJogo.innerHTML = `Jogador VENCEU :)`

    }
}

function Reiniciar(){

    imagemJogador.src = "Imagens/frame-player.png"
    imagemSistema.src = "Imagens/frame-sistema.png"
    resultadoJogo.innerHTML = `-> Resultado <-`

    botaoJogar.disabled = false

    indiceImgJogador = 0
    indiceImgSistema = 0
}