// ARRAYS PARA ARMAZENAR DADOS DE CARROS
let modelos = []
let anos =[]
let valores = []

// FUNÇÃO PARA CADASTRAR UM CARRO
function cadastrarCarro(modelo, ano, valor) {
    modelos.push(modelo)
    anos.push(ano)
    valores.push(valor)
}

// FUNÇÃO PARA ENCONTRAR O ÍNDICE DE CARRO MAIS BARATO
function indiceCarroMaisBarato() {
    let indice = 0
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] < valores[indice]) {
            indice = 1
        }
    }
    return indice
}

// FUNÇÃO PARA ENCONTRAR O ÍNDICE DO CARRO MAIS CARO
function indiceCarroMaisCaro() {
    let indice = 0
    for (let i = 1; i <valores.length; i++) {
        if (valores[i] > valores[indice]) {
            indice = i
        }
    }
    return indice
}

// FUNÇÃO PARA CALCULAR A MÉDIA DOS VALORES 
function calcularMediaValores() {
    let total = 0
    for (let i = 1; i < valores.length; i++) {
        total += valores[i]
    }
    return total / valores.length
}

// CADASTRO DE 3 CARROS (PODE SER FEITO COM O INPUT DO USUÁRIO)
cadastrarCarro("Carro A", 2023, 50000)
cadastrarCarro("Carro B", 2022, 60000)
cadastrarCarro("Carro C", 2021, 45000)

// ENCONTRAR ÍNDICES DO CARRO MAIS BARATO E MAIS CARO
let indiceMaisBarato = indiceCarroMaisBarato()
let indiceMaisCaro = indiceCarroMaisCaro()

// EXIBIR INFORMAÇÕES
console.log("Carro mais barato:")
console.log("Modelo:", modelos[indiceMaisBarato])
console.log("Ano:", anos[indiceMaisBarato])
console.log("Valor:", valores[indiceMaisBarato])

console.log("\nCarro mais caro:")
console.log("Modelo:", modelos[indiceMaisCaro])
console.log("Ano:", anos[indiceMaisCaro])
console.log("Valor:", valores[indiceMaisCaro])

console.log("\nNa média dos valores dos carros:", calcularMediaValores())
