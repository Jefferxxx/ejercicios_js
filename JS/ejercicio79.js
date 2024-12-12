function contarSilabas(texto) {
    const palabras = texto.split(' ');
    const silabas = palabras.map(palabra => {
        const cantidadSilabas = palabra.match(/[aeiouáéíóú]+/g);
        return cantidadSilabas ? cantidadSilabas.length : 0;
    });
    console.log(silabas);
}

