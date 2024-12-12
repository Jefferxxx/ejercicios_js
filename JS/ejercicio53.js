let totalProductos = 0;
for (let i = 1; i <= 5; i++) {
    totalProductos += parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
}
let iva = totalProductos * 0.19;
let subtotal = totalProductos;
let totalCompra = subtotal + iva;
alert(`Subtotal: $${subtotal.toFixed(2)}, IVA: $${iva.toFixed(2)}, Total: $${totalCompra.toFixed(2)}`);
