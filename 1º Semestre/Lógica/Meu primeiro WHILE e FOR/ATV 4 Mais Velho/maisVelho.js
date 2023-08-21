let nome, nomeVelho
let idade = 0, idadeVelho = 0, somaIdade = 0
let media

for(i = 0; i < 5; i++){

    nome = prompt('Seu Nome')
    idade = Number(prompt('Sua Idade'))
        if(idade > idadeVelho){

        idadeVelho = idade
        nomeVelho = nome
    }

    somaIdade = somaIdade + idade
    media = (somaIdade/5).toFixed(2)
}
alert(`A média foi de ${media}\n o mais velho é ${nomeVelho} e sua idade é ${idadeVelho}`)