function somarParesImpares(numeros) {
    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaPares += numeros[i];
        } else {
            somaImpares += numeros[i];
        }
    }

    return {
        somaPares: somaPares,
        somaImpares: somaImpares
    };
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const resultado = somarParesImpares(numeros);
console.log(`Soma dos pares: ${resultado.somaPares}`);
console.log(`Soma dos ímpares: ${resultado.somaImpares}`);

