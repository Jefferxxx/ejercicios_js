function calcularPromedioExamenes(calificaciones) {
    const promedio = calificaciones.reduce((a, b) => a + b) / calificaciones.length;
    return promedio;
}

const promedioExamenes = calcularPromedioExamenes([4, 5, 3, 2]);
console.log(`Promedio de exámenes: ${promedioExamenes}`);