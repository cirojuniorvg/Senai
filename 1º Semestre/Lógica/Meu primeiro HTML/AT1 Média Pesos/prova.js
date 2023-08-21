let nome = document.getElementById("nom")
let turma = document.getElementById("tur")
let nota1 = document.getElementById("n1")
let nota2 = document.getElementById("n2")
let nota3 = document.getElementById("n3")
let peso1 = document.getElementById("p1")
let peso2 = document.getElementById("p2")
let peso3 = document.getElementById("p3")
let media

function Media(){

        media = (Number((nota1.value)*Number(peso1.value)) + Number((nota2.value)*Number(peso2.value)) + (Number(nota3.value) * Number(peso3.value)))/5
        
        alert(`Olá ${nome.value}, da turma de ${turma.value} sua média é ${media}`)
    }
