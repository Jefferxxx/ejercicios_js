function esNumeroPositivo(valor) {
    const numero = Number(valor);
    return !isNaN(numero) && numero > 0;
}


let edad = prompt("Por favor, ingresa tu edad:");

while (!esNumeroPositivo(edad)) {
    edad = prompt("Entrada inválida. Por favor, ingresa un número positivo para tu edad:");
}

edad = Number(edad);

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}