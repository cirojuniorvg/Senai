// Método concat()

let frutas = ['goiaba', 'uva', 'abacaxi']
let verduras = ['pepino', 'pimenta', 'salsa']
let ortifrutis = []

ortifrutis = verduras.concat(frutas)

alert(ortifrutis)

// Métodos indexOf() e lastIndexOf() 

//             0  1  2  3  4  5  6   7   8 
let numeros = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let numeroPesquisa, indiceNumeroPrimeira, indiceNumeroUltima

    numeroPesquisa = Number(prompt("Qual número quer saber? "))

    indiceNumeroPrimeira = numeros.indexOf(numeroPesquisa)
    indiceNumeroUltima = numeros.lastIndexOf(numeroPesquisa)

alert(`Primeira posição encontrada: ${indiceNumeroPrimeira}\nÚltima posição encontrada: ${indiceNumeroUltima}`)


// Método BRUXÃO de pesquisa
//                  0  1  2  3  4  5  6   7   8 
let vetorNumeros = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let pesquisaNumero, vetorPos = []

    pesquisaNumero = Number(prompt("Qual número quer saber? "))

    for(i=0; i < vetorNumeros.length; i++){

        if(pesquisaNumero === vetorNumeros[i]){

            vetorPos.push(i)

        }

    }

    alert(`Posições encontradas: ${vetorPos}.`)



// Método join()

let numerosInteiro = [2, 3, 4, 5, 6]
let lista

    lista = numerosInteiro.join('-')

    alert(lista)


// Método fill()
//               0        1       2       3       4
let animais = ['Gato', 'Gato', 'Gato', 'Gato', 'Gato']

    animais.fill('Cachorro', 3)

alert(animais)


// Método includes()

let jogos = ['God of War', 'GTA', 'The Witcher']
let jogoEncontrado

    jogoEncontrado = jogos.includes('Zelda')

alert(jogoEncontrado)


// Método slice()

let pokemons = ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur', 'Meowtwo']
let cortePokemons

    cortePokemons = pokemons.slice(1,3)

alert(cortePokemons)    


// Método splice()

users = ['Rafael', 'Vinicius', 'Ermenegildo', 'Ainoã']

    users.splice(3, 1, 'Ciro')

alert(users)


// Método sort()

let vetorNumerosInteiros = [3, 1, 10, 4, 2, 22, 9, 6, 5]
let nomes = ['Abgail', 'Leoes Baios', 'Ursula', 'astrogildo']

    vetorNumerosInteiros.sort(BoraBill)
    nomes.sort()

alert(vetorNumerosInteiros)
alert(nomes)

function BoraBill(a, b) {

    return a - b

}











