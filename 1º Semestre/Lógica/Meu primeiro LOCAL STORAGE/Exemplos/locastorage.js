let numero
let numeroArmazenado

numero = Number(prompt('Digite um número'))

localStorage.setItem('numero', numero)

numeroArmazenado = localStorage.getItem('numero')
alert(numeroArmazenado)