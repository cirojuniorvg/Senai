let alistamento 
let ano = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]
let resposta = []
let anoA, j 

for(i=0; i<10; i++){
    alistamento = prompt(`Teve Alistamento no ano de ${ano[i]}?\nResponda com S ou N`).toUpperCase()
    if(alistamento == 'S'){
        anoA = ano[i]
        j = 1
    }
    resposta.push(alistamento)

}
        if(j == 1){
        alert(`Teve alistamento no ano ${anoA}`)

        }else{
        alert('Nao teve alistamento nesse período')
    }