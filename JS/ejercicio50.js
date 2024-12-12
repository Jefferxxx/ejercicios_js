const temperatura = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
const presion = parseFloat(prompt("Ingresa la presión en mmHg:"));

if (presion > 200 || temperatura > 100) {
    alert("Alarma");
} else {
    alert("Normal");
}
