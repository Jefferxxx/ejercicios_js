function calcularcostollamada(minutos){
    const costoporminuto = 200;
    const iva = 0.20;
    const totalSinIva = minutos * costoporminuto;
    const totalConIva = totalSinIva * (1 + iva);
    return totalConIva;
}
const minutosLlamada = 10;
console.log(`El costo de la llamada es: $${calcularostoLlamada(minutosLlamada).toFixed(2)}`);
