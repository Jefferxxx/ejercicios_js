// Solicitar al usuario un número entero
let numero = prompt("Por favor, ingresa un número entero:");

// Convertir la entrada a un número
numero = Number(numero);

// Verificar si la entrada es un número entero
if (!Number.isInteger(numero)) {
    console.log("Error: Debes ingresar un número entero.");
} else {
    // Determinar si el número es par o impar
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}