let addProduto, addPreco
let vetorMenor50 = [], vetorEntre50e100 = [],  vetorSuperior100 = [], superior100 = 0

for(i=0; i<5; i++){

    addProduto = prompt('Digite produto')

    addPreco = Number(prompt('Digite Preço'))

    if(addPreco < 50){
        vetorMenor50.push(addPreco)
    }
    if(addPreco >= 50 && addPreco <= 100){
        vetorEntre50e100.push(addProduto, addPreco)
    }
    if(addPreco > 100){
        superior100=superior100+addPreco
        vetorSuperior100.push(addPreco)
    }
}
superior100 = (superior100 / vetorSuperior100.length).toFixed(2)

alert(`A quantidade de produtos com preço inferior a R$50: ${vetorMenor50.length}\nO nome dos produtos com preço entre R$50 e R$100: ${vetorEntre50e100}\nA média dos preços dos produtos com preço superior a R$100: ${superior100}`)