function Execução(){
    
    alert("teste js")

}

function alterarDivCima(){
    /*document.getElementById("divCima").innerHTML = "Novo"
*/
    //document.getElementById("divCima").innerHTML = "Novo"

    ///document.getElementById("divCima").innerHTML = "Novo1"

    //document.getElementById("divCima").style.background = white

    //alert(document.getElementById("divBaixo").innerHTML)

    //alert(document.getElementById("campoDigitar").value

    //document.getElementById("divCima").innerHTML = "Novo"

    let entrada = Number(document.getElementById("campoDigitar").value)
    entrada *= 2
    document.getElementById("divCima").innerHTML = `O dobro é ${entrada} `
}