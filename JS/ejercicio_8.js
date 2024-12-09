
const bonificacion = 2400;
const inaceptable = 0.0;
const aceptable = 0.4;
const meritorio = 0.6;

let puntos = parseFloat(prompt("Introduce tu puntuacion: "));

let nivel = "";

if (puntos === inaceptable) {
    nivel = "Inaceptable";
} else if (puntos === aceptable) {
    nivel = "Aceptable";
} else if (puntos >= meritorio) {
    nivel = "Meritorio";
} else {
    nivel = "Puntuacion no válida";
}

if (nivel === "Puntuacion no valida") {
    alert("Esta puntuacion no es valida");
} else {
    alert(`Tu nivel de rendimiento es ${nivel}`);
    alert(`Te corresponde cobrar ${(puntos * bonificacion).toFixed(2)}€`);
}