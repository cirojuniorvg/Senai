//let receitas = [
//    {
//        nome: "Bolo de Chocolate",
//        ingredientes: [
//            { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
//            { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
//            { nome: "Açúcar", quantidade: 200, unidade: "g" }
//        ],
//        modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
//    },
//    {
//        nome: "Risoto de Funghi",
//        ingredientes: [
//            { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
//            { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
//            { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
//        ],
//        modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
//    },
//    {
//        nome: "Salada de Frutas",
//        ingredientes: [
//            { nome: "Banana", quantidade: 2, unidade: "un" },
//            { nome: "Maçã", quantidade: 2, unidade: "un" },
//            { nome: "Laranja", quantidade: 2, unidade: "un" }
//        ],
//        modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
//    }
//];

//funcao adiciona receita
function addReceita(){

    const nomeDaReceita = document.querySelector("#nomearReceitar").value
    const i1 = document.querySelector("#nomeIngrediente1").value
    const q1 = document.querySelector("#qtdeIngrediente1").value
    const u1 = document.querySelector("#unidIngrediente1").value
    const i2 = document.querySelector("#nomeIngrediente2").value
    const q2 = document.querySelector("#qtdeIngrediente2").value
    const u2 = document.querySelector("#unidIngrediente2").value
    const i3 = document.querySelector("#nomeIngrediente3").value
    const q3 = document.querySelector("#qtdeIngrediente3").value
    const u3 = document.querySelector("#unidIngrediente3").value
    const modoDePreparo = document.querySelector("#modoPreparar").value

    var receitaCompleta = {
        nome: nomeDaReceita,
        ingredientes: [
            { nome: i1, quantidade: q1, unidade: u1 },
            { nome: i2, quantidade: q2, unidade: u2 },
            { nome: i3, quantidade: q3, unidade: u3 },
        ],
        modoDePreparo: modoDePreparo
    }
    vetorReceitas.push(receitaCompleta)

    console.log(vetorReceitas)

    limparEntradinhas()
}

var vetorReceitas = []


//evento de adicionar receita
var btn = document.querySelector("#cadastroReceita")

btn.addEventListener("click", function(e) {

    e.preventDefault();

    addReceita()

})

//limpar inputs
function limparEntradinhas(){
    var limpar = document.getElementsByTagName("input")
    for(i = 0; i < limpar.length; i++){
        limpar[i].value = ''

    }
    document.getElementById("nomearReceitar").focus()
}

function mostrarPesquisa(){
    document.getElementById("div-pesquisa").display = "block"
    document.getElementById("div-cadastro").display = "none"
}

function mostrarCadastro(){
    document.getElementById("div-pesquisa").display = "none"
    document.getElementById("div-cadastro").display = "block"
}