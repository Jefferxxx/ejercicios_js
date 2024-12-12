function tablaMultiplicarCinco() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        if (i !== 5) {
            resultado += `5 * ${i} = ${5 * i}\n`;
        }
    }
    alert(resultado);
}
