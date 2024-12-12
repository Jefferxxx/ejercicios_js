let notasAlumnos = [];
for (let i = 0; i < 100; i++) {
    let notaIngresada = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1}:`));
    notasAlumnos.push(notaIngresada);
}

const notaAlta = Math.max(...notasAlumnos);
const notaBaja = Math.min(...notasAlumnos);
const maxNotaCount = notasAlumnos.filter(nota => nota === 100).length;

const aCount = notasAlumnos.filter(nota => nota < 100 && nota >= 90).length;
const bCount = notasAlumnos.filter(nota => nota < 90 && nota >= 80).length;
const cCount = notasAlumnos.filter(nota => nota < 80 && nota >= 70).length;
const dCount = notasAlumnos.filter(nota => nota < 70 && nota >= 60).length;

alert(`Nota alta: ${notaAlta}, Nota baja: ${notaBaja}, Máxima nota obtenida por ${maxNotaCount} alumnos.
Calificaciones:
A: ${aCount}, B: ${bCount}, C: ${cCount}, D: ${dCount}`);
