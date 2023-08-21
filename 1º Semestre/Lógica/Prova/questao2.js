let qualidade, custoBeneficio, durabilidade
let media

qualidade = Number(prompt('De uma nota de 0 a 10 para a qualidade do produto'))
custoBeneficio = Number(prompt('De uma nota de 0 a 10 para o custo benefício do produto'))
durabilidade = Number(prompt('De uma nota de 0 a 10 para a durabilidade do produto'))

media = ((qualidade + custoBeneficio + durabilidade)/3).toFixed(2)

switch(true){

    case media <= 5:
    alert(`Sem destaque.\nNota: ${media}`)
    break

    case media > 5 && media <= 7:
    alert(`Destaque na página da categoria\nNota: ${media}`)
    break

    case media > 7 && media <= 9:
    alert(`Destaque em promoções\nNota: ${media}`)
    break

    case media > 9 :
    alert(`Destaque na página principal\nNota: ${media}`)
    break

    default:
    alert(`Digite uma opção valida`)

}