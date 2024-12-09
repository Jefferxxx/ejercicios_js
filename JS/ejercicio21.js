function calcularVolumenElipsoide(a, b, c) {
    const pi = Math.PI;
    return (4/3) * pi * a * b * c;
}

const a = 3; 
const b = 4; 
const c = 5; 
console.log(`El volumen del elipsoide es: ${calcularVolumenElipsoide(a, b, c)} unidades cúbicas`);