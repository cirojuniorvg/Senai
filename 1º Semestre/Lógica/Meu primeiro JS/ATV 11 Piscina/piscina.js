let comprimento, largura, tamanho, azulejos, valor

comprimento = Number(prompt("Comprimento da piscina"))
largura = Number(prompt("Largura da piscina"))

tamanho = (comprimento * largura)

azulejos = (tamanho * 120)

valor = ((azulejos/60) * 45.50)

alert(`Você precisa de ${azulejos} e irá gastar ${valor} reais`)
