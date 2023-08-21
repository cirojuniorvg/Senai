let populacao, area, densidade

populacao = prompt('Pessoas totais')
area = Number(prompt('Área em km²'))

densidade = (populacao / area).toFixed(2)

if(densidade > 100){

    alert(`A densidade é ${densidade} e é ALTA`)

}else if(densidade < 25){

    alert(`A densidade é ${densidade} e é BAIXA`)

}else{

    alert(`A densidade é ${densidade} e é MÉDIA`)

}