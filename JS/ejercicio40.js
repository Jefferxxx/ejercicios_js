function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}

const añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
const edadSolicitante = calcularEdad(añoNacimiento);
alert(`Edad del solicitante: ${edadSolicitante} años`);