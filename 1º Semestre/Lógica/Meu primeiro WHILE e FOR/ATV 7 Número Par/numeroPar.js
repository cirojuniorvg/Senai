let num , soma = 0, impar = 0
let media

for(i = 0; i < 5; i++){

    num = Number(prompt('Digite um número'))

    if(num % 2 == 0 ){
        soma = soma + num
    
    }else{
        impar++
    }   
}

if(impar > 0){
    alert('Um dos números é impar')

}else{
    media = (soma / 5).toFixed(2)
    alert(`${media}`)
}