function encontrarIndicesSomaAlvoSimples(num, alvo) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == alvo) {
                return [i, j]
            }
        }
    }
    return null; // Caso não encontre a combinação
}

function encontrarIndicesSomaAlvoAvançada(nums, alvo) {
    const indicePorNumero = []

    for (let i = 0; i < nums.length; i++) {
        const complemento = alvo - nums[i]
        if (indicePorNumero[complemento] !== undefined) {
            return[indicePorNumero[complemento], i]
        }
        indicePorNumero[nums[i]] = i 
    }
    return null // CASO NÃO ENCONTRE A COMBINAÇÃO
}