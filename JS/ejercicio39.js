function calcularPresupuesto(area, costoPorMetroCuadrado) {
    return area * costoPorMetroCuadrado;
}

const area = parseFloat(prompt("Ingrese el área a pintar (m²):"));
const costoPorMetroCuadrado = parseFloat(prompt("Ingrese el costo por m²:"));
const presupuesto = calcularPresupuesto(area, costoPorMetroCuadrado);
alert(`Presupuesto total: $${presupuesto}`);