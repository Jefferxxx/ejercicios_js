function parteLorena(totalTapa) {
    const parteMartin = (2 / 3) * totalTapa;
    const parteJairo = (1 / 4) * totalTapa;
    const parteLorena = totalTapa - (parteMartin + parteJairo);
    return parteLorena / totalTapa;
}

const fraccionTotalTapa = parseFloat(prompt("Ingrese el total de tapas:"));
const fraccionLorena = parteLorena(fraccionTotalTapa);
alert(`Parte que le corresponde a Lorena: ${fraccionLorena}`);