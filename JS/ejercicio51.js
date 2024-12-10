let consumo = parseFloat(prompt("Ingrese el consumo total:"));
let descuento = 0;

if (consumo > 130000) {
    descuento = consumo * 0.15;
}
let totalPagar = consumo - descuento;
alert(`Total a pagar: $${totalPagar.toFixed(2)} (Descuento: $${descuento.toFixed(2)})`);
