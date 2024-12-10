function calcularSueldo(nombre, horasTrabajo, pagoPorHora) {
    const sueldo = horasTrabajo * pagoPorHora;
    return { nombre, sueldo };
}

const empleado = calcularSueldo("Juan", 40, 15);
console.log(`Nombre: ${empleado.nombre}, Sueldo: $${empleado.sueldo}`);