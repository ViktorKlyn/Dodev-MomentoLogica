function podePlantarFlores(canteiro, n) {
    let count = 0
    let i = 0

    while (i < canteiro.length) {
        if (canteiro[i] === 0) {
            if (i === 0 || canteiro[i - 1] === 0) {
                canteiro[i] = 1
                count++
            }
        }
        i++
    }
    return count >= n
}

// EXEMPLO DE USO
const canteiro = [1, 0, 0, 0, 1]
const n = 1

const resultado = podePlantarFlores(canteiro, n)
console.log(resultado) // DEVE IMPRIMIR TRUE OU FALSE