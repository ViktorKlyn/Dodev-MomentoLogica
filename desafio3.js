function valorDoSimboloRomano(simbolo) {
    switch (simbolo) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
        default:
            return 0
    }
}

function converterNumeroRomano(numeroRomano) {
    let total = 0

    for (let i = 0; i < numeroRomano.length; i++) {
      const valorAtual = valorDoSimboloRomano(numeroRomano[i])
      const valorProximo = valorDoSimboloRomano(numeroRomano[i + 1])

      if (valorProximo > valorAtual) {
        total += valorProximo - valorAtual
        i++; // AVANÇA MAIS UM CARACTERE, POIS JÁ PROCESSAMOS DOIS SÍMBOLOS
      } else {
        total += valorAtual
      }
    }

    return total
}

// EXEMPLO DE USO
const numeroRomano = 'MCMXCIV'
const inteiro = converterNumeroRomano(numeroRomano)

console.log(`O número romano ${numeroRomano} é equivalente a ${inteiro}`)