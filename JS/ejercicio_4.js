let numero = prompt("Por favor, ingresa un número entero:");

numero = Number(numero);

if (!Number.isInteger(numero)) {
    console.log("Error: Debes ingresar un número entero.");
} else {

    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}