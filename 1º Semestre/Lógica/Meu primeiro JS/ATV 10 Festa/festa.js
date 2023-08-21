let  desper, sobrou, quantidade, media

desper = Number(prompt("Chopp desperdiçado"))
sobrou = Number(prompt("Chopp que sobrou"))

quantidade = (300 - desper - sobrou)

media = (quantidade / 45).toFixed(2)

alert(`A média por pessoa foram de ${media} litros`)