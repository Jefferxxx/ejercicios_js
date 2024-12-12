function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

const distancia = calcularDistancia(1, 2, 4, 6);
console.log(`Distancia: ${distancia}`);