let especie, populacao

especie = prompt('Nome da espécie')
populacao = Number(prompt('População do animal'))

if(populacao >= 1000 && populacao <= 5000){

    alert(`A espécie ${especie} está vulnerável`)

}else if(populacao > 500 && populacao <= 1000){

    alert(`A espécie ${especie} está em perigo`)

}else{

    alert(`A espécie ${especie} está criticamente em perigo`)
}