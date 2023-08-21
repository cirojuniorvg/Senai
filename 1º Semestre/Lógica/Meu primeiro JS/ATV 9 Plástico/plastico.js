let plastico, papel, metal, rendePl, rendePa, rendeMe, rendeTotal

plastico = Number(prompt("Quantidade de plástico em kg"))
papel = Number(prompt("Quantidade de papel em kg"))
metal = Number(prompt("Quantidade de metal em kg"))

rendePl = (plastico * 0.2 )
rendePa = (papel * 0.1)
rendeMe = (metal * 0.1 )
rendeTotal = (rendeMe + rendePa + rendePl).toFixed(2)

alert(`O rendimento total da empresa foi de R$${rendeTotal}`)