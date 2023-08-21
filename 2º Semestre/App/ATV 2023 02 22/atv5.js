let area,perimetro,diagonal


let retangulo = {

    largura: 4,
    altura: 3 
}

function areaRetangulo(){

area = retangulo.largura * retangulo.altura 

}

function perimetroRetangulo(){

perimetro = 2*(retangulo.largura+retangulo.altura) 

}

function diagonalRetangulo(){

diagonal = Math.sqrt(retangulo.largura * retangulo.largura + retangulo.altura * retangulo.altura)

}

areaRetangulo()
perimetroRetangulo()
diagonalRetangulo()

console.log(`Área:${area}, Perímetro:${perimetro}, Diagonal:${diagonal}`)