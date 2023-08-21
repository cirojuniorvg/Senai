let j1, j2
let c1, c2
let soma1 = 0, soma2 = 0

j1 = prompt('Didite o nome do Player 1')
j2 = prompt('Didite o nome do Player 2')

for(i=0; i<5; i++){

    c1 = Number(prompt(`${j1} Digite o valor da carta`))
        soma1 = soma1 + c1
    c2 = Number(prompt(`${j2} Digite o valor da carta`))
        soma2 = soma2 + c2
}
if(soma1 > soma2 ){
    
    alert(`${j1} venceu com ${soma1}`)
}else{
    alert(`${j2} venceu com ${soma2}`)
}