
function dividirNumeros(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("Error: No se puede dividir entre cero.");
    }
    return dividendo / divisor;
}

let dividendo = prompt("Por favor, ingresa el dividendo:");
let divisor = prompt("Por favor, ingresa el divisor:");

try {
    
    dividendo = Number(dividendo);
    divisor = Number(divisor);

    if (isNaN(dividendo) || isNaN(divisor)) {
        throw new Error("Error: Ambos valores deben ser números.");
    }

    const resultado = dividirNumeros(dividendo, divisor);
    console.log(`El resultado de la división es: ${resultado}`);
} catch (error) {
    console.error(error.message);
}