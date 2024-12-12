let saldoBanco = parseFloat(prompt("Ingrese su saldo en el banco:"));
let interesAnual, interesPagado;

if (saldoBanco < 100000) {
    interesAnual = saldoBanco * 0.03;
} else {
    interesAnual = saldoBanco * 0.04;
}
let saldoFinal = saldoBanco + interesAnual;
alert(`Saldo final: $${saldoFinal.toFixed(2)}, Interés pagado: $${interesAnual.toFixed(2)}`);
