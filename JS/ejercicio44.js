const pesos = parseFloat(prompt("Ingresa la cantidad en pesos:"));
const tasaDolar = 4000; 
const tasaEuro = 4500; 

const dolares = pesos / tasaDolar;
const euros = pesos / tasaEuro;

alert(`Cantidad en dólares: $${dolares.toFixed(2)}\nCantidad en euros: €${euros.toFixed(2)}`);