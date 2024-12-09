function areaCilindro(radio, altura) {
    const areaBase = Math.PI * Math.pow(radio, 2);
    const areaLateral = 2 * Math.PI * radio * altura;
    return (2 * areaBase) + areaLateral;
}

function volumenCilindro(radio, altura) {
    return Math.PI * Math.pow(radio, 2) * altura;
}


const radioCilindro = 3;
const alturaCilindro = 7;
console.log(`El área del cilindro es: ${areaCilindro(radioCilindro, alturaCilindro)} unidades cuadradas`);
console.log(`El volumen del cilindro es: ${volumenCilindro(radioCilindro, alturaCilindro)} unidades cúbicas`);