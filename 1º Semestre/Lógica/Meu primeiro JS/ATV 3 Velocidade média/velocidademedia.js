let quilometros, horas, velmed

    quilometros = Number(prompt('Quilometro da trilha'))
    horas = Number(prompt('Tempo da trilha'))

    velmed = (quilometros / horas).toFixed(2)

    alert(`Sua média de velocidade durante essa trilha foi de ${velmed} km/h`)