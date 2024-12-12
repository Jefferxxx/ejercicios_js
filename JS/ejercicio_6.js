function determinarGrupo(nombre, sexo) {
    if ((sexo === 'mujer' && nombre < 'M') || (sexo === 'hombre' && nombre > 'N')) {
        return 'Grupo A';
    } else {
        return 'Grupo B';
    }
}

const nombre = prompt("Por favor, introduce tu nombre:").toUpperCase();
const sexo = prompt("Por favor, introduce tu sexo (mujer/hombre):").toLowerCase();


if (sexo !== 'mujer' && sexo !== 'hombre') {
    console.log("Sexo no valido. Por favor, introduce 'mujer' o 'hombre'.");
} else {
    const grupo = determinarGrupo(nombre, sexo);
    alert(`Tu grupo es: ${grupo}`);
}