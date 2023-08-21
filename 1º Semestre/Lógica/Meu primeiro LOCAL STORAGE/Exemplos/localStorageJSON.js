let numero
let numeroArmazenado

numero = Number(prompt('Digite um número'))

localStorage.setItem('numeros', JSON.stringify(numero))

numeroArmazenado = JSON.parse(localStorage.getItem('numeros'))
console.log(numeroArmazenado)