
let edad = prompt("Por favor, ingresa tu edad:");
edad = Number(edad);
let ingresos = prompt("Por favor, ingresa tus ingresos mensuales:");
ingresos = Number(ingresos);

if (isNaN(edad) || isNaN(ingresos)) {
    console.log("Error: Debes ingresar valores numéricos válidos.");
} else {

    if (edad > 16 && ingresos >= 1000) {
        console.log("Debes tributar.");
    } else {
        console.log("No debes tributar.");
    }
}