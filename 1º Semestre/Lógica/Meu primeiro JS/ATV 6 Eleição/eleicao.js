let eleitoresCidade, votaUm, votaDois, votaBranco, votaNulo, pcUm, pcDois, pcB, pcN

    eleitoresCidade = Number(prompt('Eleitores da cidade'))
    votaUm = Number(prompt('Eleitores candidato um'))
    votaDois = Number(prompt('Eleitores candidato dois'))
    votaBranco = Number(prompt('Votaram em branco'))
    votaNulo = Number(prompt('Votaram nulo'))

    pcUm = ((100 * votaUm) / eleitoresCidade).toFixed(2)
    pcDois = ((100 * votaDois) / eleitoresCidade).toFixed(2)
    pcB = ((100 * votaBranco) / eleitoresCidade).toFixed(2)
    pcN = ((100 * votaNulo) / eleitoresCidade).toFixed(2)

    alert(`Eleitores do um é ${pcUm}%\n eleitores do dois é ${pcDois}%\n brancos são ${pcB}%\n nulos são ${pcN}`)