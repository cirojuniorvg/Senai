let anoNasce, anoAtual, anos, meses, semanas, dias

    anoNasce = Number(prompt('Ano de nascimento'))
    anoAtual = Number(prompt('Digite o ano que estamos'))

    anos = anoAtual - anoNasce
    meses = anos * 12
    semanas = anos * 54
    dias = anos * 365

    alert(`Você tem ${anos} anos\n${meses} meses\n${semanas} semanas\n${dias} dias`)