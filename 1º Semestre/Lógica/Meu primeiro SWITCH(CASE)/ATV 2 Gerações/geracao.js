let nasceu

    nasceu = Number(prompt('Digite o ano que nacestes'))

        switch(true){

            case nasceu <= 1945:

                alert('Sem Gereção')
                break

            case nasceu >= 1946 && nasceu <= 1964:

                alert('Geração dos Baby Boomers')
                break

            case nasceu >=1965 && nasceu <= 1980:

                alert('Geração X')
                break

            case nasceu >= 1981 && nasceu <= 1996:

                alert('Geração Y')
                break

            case nasceu >= 1997 && nasceu <= 2010:

                alert('Geração Z')
                break

            default:

                alert('Geração Alfa')
        }