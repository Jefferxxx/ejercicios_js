function calcularDineroInicial() {
    const costoLlaves = 5 * 11500;
    const costoBomba = 1168000;
    const costoPernos = 3 * 87000;
    const dineroSobrante = 91000;

    const dineroTotal = costoLlaves + costoBomba + costoPernos + dineroSobrante;
    return dineroTotal;
}

const dineroInicial = calcularDineroInicial();
alert(`El jefe de obra tenía: $${dineroInicial}`);