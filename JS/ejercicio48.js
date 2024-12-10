const figura = prompt("¿Qué figura geométrica deseas calcular? (Escribe T para Triángulo o C para Círculo):").toUpperCase();

if (figura === 'T') {
    const base = parseFloat(prompt("Ingresa la base del triángulo:"));
    const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
    const areaTriangulo = (base * altura) / 2;
    alert(`El área del triángulo es: ${areaTriangulo}`);
} else if (figura === 'C') {
    const radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    const areaCirculo = Math.PI * Math.pow(radio, 2);
    alert(`El área del círculo es: ${areaCirculo}`);
} else {
    alert("Figura no reconocida.");
}