//s leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. (JS)

let casais, individuais, areaTotal
let totalLeoes = 14, kmIndividual = 320, kmCasal = 400

    casais = Number(prompt("Digite número de casais possiveis"))

    individuais = totalLeoes - (casais * 2)
    areaTotal = (individuais * kmIndividual) + (casais * kmCasal)

alert(`O território total é de ${areaTotal}km²`)