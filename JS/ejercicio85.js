function sumaNumerosPositivos(arreglo) {
    const suma = arreglo.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
    alert(suma);
}
