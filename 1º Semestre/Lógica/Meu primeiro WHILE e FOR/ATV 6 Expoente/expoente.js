let base, exp, res = 1

base = Number(prompt('Digite uma base'))
exp = Number(prompt('Digite um expoente'))

for(i = 0; i < exp; i++){

    res = res * base
}
alert(`${res}`)
