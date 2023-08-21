// contact
let frutas = ['goiaba', ' uva', ' abacaxi'] 
let verduras = [' pepino', ' pimenta', ' salsa']
let ortifrutis = []

ortifrutis = frutas.concat(verduras)
//ortifrutis = [...verduras, 'repolhoo']

alert(ortifrutis)

//indexOf e lastInderOF

//             0  1  2  3  4  5  6   7  8
let numeros = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let numeroPesquisa, indiceNumeroPrimeira, indiceNumeroUltima
let indice = []
    /*numeroPesquisa = Number(prompt('Qual núero quer saber?'))

   indiceNumeroPrimeira = numeros.indexOf(numeroPesquisa)
   indiceNumeroUltima = numeros.lastIndexOf(numeroPesquisa)*/
   
   numeroPesquisa = Number(prompt('Qual número quer saber?'))
   
   for(i=0; i < numeros.length; i++){

    if(numeros[i] == numeroPesquisa)

    indice.push(i)
    
}

alert(indice)
//alert(`O número pesquiosado foi encontrado na posição ${indiceNumeroPrimeira}\nÚltima posição encontrada: ${indiceNumeroUltima}`)