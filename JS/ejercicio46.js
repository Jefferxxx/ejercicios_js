const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const num3 = parseFloat(prompt("Ingresa el tercer número:"));

const mayor = Math.max(num1, num2, num3);
alert(`El mayor de los tres números es: ${mayor}`);