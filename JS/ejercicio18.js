function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}

const a = 1;
const b = 2;
const c = 3;
alert(`El resultado de la expresión es: ${evaluarExpresion(a, b, c)}`);