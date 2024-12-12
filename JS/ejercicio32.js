function calcularTotalCompra(precios) {
    let totalCompra = 0;

    precios.forEach((precio, index) => {
        let descuento = index < 2 ? precio * 0.05 : precio * 0.02; 
        let precioConDescuento = precio - descuento;
        totalCompra += precioConDescuento;
        console.log(`Producto ${index + 1}: Precio original: $${precio}, Descuento: $${descuento}, Precio final: $${precioConDescuento}`);
    });

    console.log(`Total a pagar: $${totalCompra}`);
}

calcularTotalCompra([100, 200, 150, 250]);