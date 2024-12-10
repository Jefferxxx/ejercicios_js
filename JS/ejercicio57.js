let calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));
let calificacionLiteral;

if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
    calificacionLiteral = "A - Excelente";
} else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9.1) {
    calificacionLiteral = "A - Muy bien";
} else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8.1) {
    calificacionLiteral = "A - Bien";
} else {
    calificacionLiteral = "NA - No Aprobado";
}
alert(calificacionLiteral);
