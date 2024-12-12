function calcularAreaRectangulo(lado1, lado2) {
    return lado1 * lado2;
}

const lado1 = parseFloat(prompt("Ingresa el primer lado del rectángulo (debe ser positivo):"));
const lado2 = parseFloat(prompt("Ingresa el segundo lado del rectángulo (debe ser positivo):"));

if (lado1 > 0 && lado2 > 0) {
    const areaRectangulo = calcularAreaRectangulo(lado1, lado2);
    alert(`El área del rectángulo es: ${areaRectangulo}`);
} else {
    alert("Los lados deben ser positivos.");
}