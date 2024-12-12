function calcularPromedioFinal(parciales, examenFinal, trabajoFinal) {
    const promedioParciales = parciales.reduce((a, b) => a + b) / parciales.length;
    const promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    return promedioFinal;
}

const promedio = calcularPromedioFinal([4, 5, 3], 4, 5);
console.log(`Promedio final: ${promedio}`);