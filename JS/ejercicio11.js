
function calcularOperaciones(num1, num2) {
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num2 !== 0 ? (num1 / num2) : 'No se puede dividir por cero';

    return {
        suma,
        resta,
        multiplicacion,
        division
    };
}

const numero1 = parseFloat(prompt("Ingrese el primer numero:"));
const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    const resultados = calcularOperaciones(numero1, numero2);

    console.log(`Suma: ${resultados.suma}`);
    console.log(`Resta: ${resultados.resta}`);
    console.log(`Multiplicación: ${resultados.multiplicacion}`);
    console.log(`División: ${resultados.division}`);
} else {
    console.log("Por favor, ingrese numeros validos.");
}