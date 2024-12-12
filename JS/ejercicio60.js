let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));
let costoCurso;

if (cantidadCursos < 6) {
    costoCurso = cantidadCursos * 2000000;
} else {
    costoCurso = cantidadCursos * 1200000;
}
alert(`Total a pagar por cursos: $${costoCurso}`);
