function medianumeros(numeros) {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

const numeros = [4, 8, 15, 16];
alert(`La media es: ${medianumeros(numeros)}`);