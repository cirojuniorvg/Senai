let pai = []
let mae = []
let filho = []
let add

function gerarPai() {
    


for(i=0; i<10; i++){

    add = Math.random() * 10
    add = Math.round(add)
    pai.push(add)
    document.getElementById('pai').innerHTML+="<br>"+pai[i]

}
}

function gerarMae() {
    
    for(i=0; i<10; i++){
    
    
        add = Math.random() * 10
        add = Math.round(add)
        mae.push(add)
        document.getElementById('mae').innerHTML+="<br>"+mae[i]
    
    }
    }

    function gerarFilho() {
    
        for(i=0; i<10; i++){

            if(i % 2 == 0){
                filho.push(pai[i])
            }          
            
            if(i % 2 != 0){
                filho.push(mae[i])
            }
            document.getElementById('filho').innerHTML+="<br>"+filho[i]
        }
        }