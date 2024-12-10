function tiempoLlenadoDeposito(caudal, radio, altura) {
    const volumen = Math.PI * Math.pow(radio, 2) * altura;
    const tiempoSegundos = volumen / caudal;
    const tiempoMinutos = tiempoSegundos / 60;
    return tiempoMinutos;
}

const caudal = parseFloat(prompt("Ingrese el caudal (litros/segundo):"));
const radio = parseFloat(prompt("Ingrese el radio del depósito (metros):"));
const altura = parseFloat(prompt("Ingrese la altura del depósito (metros):"));
const tiempo = tiempoLlenadoDeposito(caudal, radio, altura);
alert(`Tiempo estimado para el llenado: ${tiempo.toFixed(2)} minutos`);