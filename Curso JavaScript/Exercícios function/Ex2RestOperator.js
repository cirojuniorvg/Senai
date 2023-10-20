function calcularValores(operacao, ...numeros){
    let total = numeros[0];
    for (i=1;i<numeros.length; i++){
        if (operacao === 'somar'){
            total+= numeros[i]
            continue;
        }
        if (operacao === 'multiplicar'){
            total*=numeros[i]
            continue
        }
    }
    return total
}


calcularValores('somar', 10, 50, 70, 90, 150)
calcularValores('multiplicar', 10, 50, 2);