let salario, pisoSalarial, salarioAnual

    salarioAnual = Number(prompt("Digite seu salário anual"))
    pisoSalarial = Number(prompt("Digite o piso salárial"))

    salario = (salarioAnual  / 12).toFixed(2)

        if(salario < pisoSalarial){

            alert(`Seu salário é de ${salario} e esta abaixo do piso salarial`)

        }else{

            alert(`Seu salário é de ${salario} e está acima do piso salarial`)

        }



