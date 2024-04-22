function podeDarTroco(notas) {
    let troco5 = 0 // QUANTIDADE DE NOTAS DE R$ 5
    let troco10 = 0 // QUANTIDADE DE NOTAS DE R$ 10

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i]

        if (nota === 5) {
            troco5++
        } else if (nota === 10) {
            if (troco5 > 0) {
                troco5 --
                troco10 ++
            } else {
                return false // NÃO TEM TROCO DE R$ PARA DAR
            }
        } else if (nota === 20) {
            if (troco10 > 0 && troco5 > 0) {
                troco10--
                troco5--
            } else if (troco5 >= 3) {
                troco -= 3
            } else {
                return false // NÃO TEM TROCO SUFICIENTE
            }
        }
    }

    return true
}

// EXEMPLO DE USO
const notas = [5, 5, 5, 10, 20]
const resultado = podeDarTroco(notas)
console.log(resultado)  // DEVE IMPRIMIR TRUE OU FALSE