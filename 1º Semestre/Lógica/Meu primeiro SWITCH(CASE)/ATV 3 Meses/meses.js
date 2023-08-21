let mes

mes = Number(prompt('Digite o mês'))

switch(mes){
        
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

        alert("O mês tem 31")
        break

    case 2:

        alert("O mês tem 28")
        break

    case 4:
    case 6:
    case 9 :
    case 11:

        alert("O mês tem 30")
        break
    
    default:
        
        alert('Eres tanso?')

}