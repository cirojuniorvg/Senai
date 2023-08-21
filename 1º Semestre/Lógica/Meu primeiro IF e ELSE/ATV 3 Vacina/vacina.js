let nome, idade, comorbidade

    nome = prompt('Seu nome')
    idade = Number(prompt('Sua idade'))
    comorbidade = prompt('Comorbidade?').toUpperCase()

        if(idade > 60 || comorbidade == 'SIM'){

            alert(`Olá ${nome} você cumpre os requisitos da vacina`)

        }else{

            alert(`Olá ${nome} você NÃO cumpre os requisitos da vacina`)

        }