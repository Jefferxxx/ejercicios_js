//Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
//que ingresando el costo de los medicamentos calcule el descuento y el precio final.

function  calcularprecios(costo) {
const descuento = costo * 0.10;
const precioFinal = costo - descuento;
return { descuento, precioFinal };
}

const resultado = calcularprecios(100);
alert(`El descuento es: $${resultado.descuento}, precio final: $${resultado.precioFinal}`);
