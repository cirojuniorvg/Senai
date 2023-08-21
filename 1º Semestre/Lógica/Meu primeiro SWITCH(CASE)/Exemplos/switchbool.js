let numero

    mes = Number(prompt("Digite um número"))


    switch(true){
        
        case mes > 10:

            alert("O número é maior que 10")
            break

        case mes <= 10 && mes >= 5:

            alert("O número está entre 5 a 10")
            break

        default:

            alert("O número é menor que 5")

    }
