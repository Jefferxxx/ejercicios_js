function dividirNumeros(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: No se puede dividir entre cero.";
    }
    return dividendo / divisor;
}

let dividendo = prompt("Por favor, ingresa el dividendo:");
let divisor = prompt("Por favor, ingresa el divisor:");

dividendo = Number(dividendo);
divisor = Number(divisor);

if (isNaN(dividendo) || isNaN(divisor)) {
    console.log("Error: Ambos valores deben ser numeros.");
} else {
    const resultado = dividirNumeros(dividendo, divisor);
    console.log(`El resultado de la division es: ${resultado}`);
    
}