const valor1 = parseFloat(prompt("Ingresa el primer valor:"));
const valor2 = parseFloat(prompt("Ingresa el segundo valor:"));
const valor3 = parseFloat(prompt("Ingresa el tercer valor:"));

if (valor1 === valor2 && valor2 === valor3) {
    alert("Los tres valores son iguales.");
} else {
    const mayor = Math.max(valor1, valor2, valor3);
    const menor = Math.min(valor1, valor2, valor3);
    alert(`El mayor es: ${mayor}\nEl menor es: ${menor}`);
}