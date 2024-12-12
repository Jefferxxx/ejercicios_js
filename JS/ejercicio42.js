const libros = parseInt(prompt("¿Cuántos libros vendiste? (Precio: $10,000)"));
const cuadernos = parseInt(prompt("¿Cuántos cuadernos vendiste? (Precio: $7,550)"));
const lapiceros = parseInt(prompt("¿Cuántos lapiceros vendiste? (Precio: $5,550)"));

const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

const totalVenta = (libros * precioLibro) + (cuadernos * precioCuaderno) + (lapiceros * precioLapicero);
alert(`Monto total de la venta: $${totalVenta}`);