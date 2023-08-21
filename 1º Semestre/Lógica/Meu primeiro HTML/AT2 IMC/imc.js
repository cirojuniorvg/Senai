let altura = document.getElementById("alt")
let peso = document.getElementById("pes")
let imc 

    function Calcular(){

        imc = (Number(peso.value) / (Number(altura.value) * Number(altura.value))).toFixed(3)

        alert (`Seu IMC é ${imc}`)

    }
