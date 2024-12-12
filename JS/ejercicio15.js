function longitudcircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function areacircunferencia(radio) {
    return Math.PI * Math.pow(radio, 2);
}

const radio = 3;
alert(`La longitud de la circunferencia es: ${longitudcircunferencia(radio)} unidades`);
alert(`El área de la circunferencia es: ${areacircunferencia(radio)} unidades cuadradas`);
