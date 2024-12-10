let edadPostulante = parseInt(prompt("Ingrese la edad del postulante:"));
let estaturaPostulante = parseFloat(prompt("Ingrese la estatura del postulante en cm:"));
let pesoPostulante = parseFloat(prompt("Ingrese el peso del postulante en kg:"));

if (edadPostulante <= 19 && estaturaPostulante > 175 && pesoPostulante >= 75 && pesoPostulante <= 80) {
    alert("El postulante es elegible para la selección.");
} else {
    alert("El postulante no cumple con los requisitos.");
}
