function calcularEdadAlDarALuz(edadActual, edadHijo) {
    return edadActual - edadHijo;
}

const edadMadreAlDarALuz = calcularEdadAlDarALuz(35, 5);
console.log(`Edad de la madre al dar a luz: ${edadMadreAlDarALuz} años`);