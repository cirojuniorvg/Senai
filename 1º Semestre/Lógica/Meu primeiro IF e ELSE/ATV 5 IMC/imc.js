let peso, altura, imc

    peso = Number(prompt('Digite o peso'))
    altura = Number(prompt('Digite a altura'))

    imc = (peso/(altura * altura)).toFixed(2)

        if(imc < 18){

            alert(`Seu IMC é ${imc} e seu peso está abaixo do normal`)
        
        }else if(imc > 25){

            alert(`Seu IMC é ${imc} e você está acima do peso`)

        }else{

            alert(`Seu IMC é ${imc} e você está dentro do peso`)

        }