let numeros = []
let addNum = []
let s1 = 0
let s2 = 0

for(i=0; i<10; i++){

    addNum = Number(prompt('Digite 10 numeros'))
    numeros.push(addNum)

    if(i<5){
        s1+=addNum
    }else{
        s2+=addNum
    }
}

alert(`Lista: ${numeros}\nSoma1: ${s1}\nSoma2: ${s2}\nSubtração: ${s2-s1}`)