let nome, nacionalidade, sexo, idade, morar

alert('Bem-Vindo ao sistema de cadastro brasileiro')

nome = prompt('Digite seu nome:')
nacionalidade = prompt('Digite sua nacionalidade:').toUpperCase()
sexo = prompt('Digite seu sexo M/H').toUpperCase()
idade = Number(prompt('Digite sua idade'))
morar = Number(prompt('Caso não seja brasileiro digite a quantos anos moras no Brasil, se for brasileiro digite 0'))

if(nacionalidade == 'BRASIL' && sexo == 'H' && idade >= 18 && idade <= 70){

    alert(`Olá ${nome}\nVocê está apto ao cadastro.`)

}else if(nacionalidade == 'BRASIL' && sexo == 'M' && idade >= 18 && idade <= 60){

    alert(`Olá ${nome}\nVocê está apta ao cadastro.`)

}else if(nacionalidade != 'BRASIL' && idade >= 18 && idade <= 35 && morar >= 5){

    alert(`Olá ${nome}\nEstás listo para registrarte. ARIBA`)

}else{

    alert(`Olá ${nome}\nVocê não cumpre os requisitos para o cadastro`)

}