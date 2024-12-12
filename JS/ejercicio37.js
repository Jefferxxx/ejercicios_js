function pesoTotalCamion(cajas, pesoPorCaja) {
    const pesoTotal = cajas * pesoPorCaja;
    return pesoTotal;
}

const cajas = parseInt(prompt("Ingrese la cantidad de cajas:"));
const pesoPorCaja = parseFloat(prompt("Ingrese el peso por caja (Kg):"));
const pesoCamion = pesoTotalCamion(cajas, pesoPorCaja);
alert(`Peso total transportado: ${pesoCamion} Kg`);