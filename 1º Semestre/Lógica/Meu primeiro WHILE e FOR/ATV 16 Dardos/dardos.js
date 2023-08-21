let tiro 
let somaTiro = 0
// 45 ponto - 75%
// 30 pontos - 50%

for(i=0; i<6; i++){
    
    tiro = Math.floor(Math.random() * (60-0) + 0)
    alert(`Fez ${tiro} pontos`)
    somaTiro = somaTiro + tiro

}
somaTiro = (somaTiro/6).toFixed(1)

if(somaTiro >= 45){

    alert(`VOCÊ FEZ ${somaTiro}\n RESULTADO: CLASSIFIADO`)

}else if(somaTiro < 30){

    alert(`VOCÊ FEZ ${somaTiro}\n RESULTADO: DESCLASSIFICADO`)

}else{

    alert(`VOCÊ FEZ ${somaTiro}\n RESULTADO: REPESCAGEM`)

}