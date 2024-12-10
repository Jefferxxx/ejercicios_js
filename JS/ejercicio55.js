let tipoMembresia = prompt("Ingrese el tipo de membresía (A/B/C):").toUpperCase();
let compraHelado = parseFloat(prompt("Ingrese el valor de la compra:"));
let descuentoMembresia;

switch (tipoMembresia) {
    case 'A':
        descuentoMembresia = compraHelado * 0.10;
        break;
    case 'B':
        descuentoMembresia = compraHelado * 0.15;
        break;
    case 'C':
        descuentoMembresia = compraHelado * 0.20;
        break;
    default:
        descuentoMembresia = 0;
        alert("Tipo de membresía no válido.");
}

let totalConDescuento = compraHelado - descuentoMembresia;
alert(`Total a pagar después del descuento: $${totalConDescuento.toFixed(2)}`);
