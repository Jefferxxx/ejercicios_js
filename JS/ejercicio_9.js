function calcularPrecioEntrada(edad) {
    if (edad < 4) {
        return "La entrada es gratis.";
    } else if (edad >= 4 && edad <= 18) {
        return "El precio de la entrada es 5€ .";
    } else {
        return "El precio de la entrada es 10€.";
    }
}

let edadCliente = prompt("Por favor, introduce la edad del cliente:");

edadCliente = parseInt(edadCliente);

if (!isNaN(edadCliente)) {

    let precio = calcularPrecioEntrada(edadCliente);
    alert(precio);
    
} else {
    alert("Por favor, introduce una edad valida.");
}