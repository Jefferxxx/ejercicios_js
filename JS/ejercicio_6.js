function determinarGrupo(nombre, sexo) {
    const nombreMayus = nombre.toUpperCase();
    

    if ((sexo === 'mujer' && nombreMayus < 'M') || (sexo === 'hombree' && nombreMayus > 'N')) {
        return 'Grupo A';
    } else {
        return 'Grupo B';
    }
}

const nombre = prompt("Por favor, introduce tu nombre:");
const sexo = prompt("Por favor, introduce tu sexo (mujer/hombre):").toLowerCase();


if (sexo !== 'mujer' && sexo !== 'hombre') {
    console.log("Sexo no valido. Por favor, introduce 'mujer' o 'hombre'.");
} else {
    const grupo = determinarGrupo(nombre, sexo);
    alert(`Tu grupo es: ${grupo}`);
}