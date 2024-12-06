function determinarTipoImpositivo(renta) {
    if (renta >= 10000 && renta < 20000) {
        returnalert('Tu tipo de impositivo a pagar es 5%') ;
    } else if (renta >= 20000 && renta < 35000) {
        return alert('Tu tipo de impositivo a pagar es 10%');
    } else if (renta >= 35000 && renta < 60000) {
        return alert('Tu tipo de impositivo a pagar es 20%');
    } else if (renta >= 60000) {
        return alert('Tu tipo de impositivo a pagar es 45%');
    } else {
        return 'No aplica, la renta debe ser mayor o igual a 10000.';
    }
}

const rentaAnual = parseFloat(prompt("Por favor, introduce tu renta anual:"));

if (isNaN(rentaAnual)) {
    
    console.log("Por favor, introduce un valor numérico válido para la renta.");
} else {
    const tipoImpositivo = determinarTipoImpositivo(rentaAnual);
    alert(`Tu tipo impositivo es: ${tipoImpositivo}`);
}