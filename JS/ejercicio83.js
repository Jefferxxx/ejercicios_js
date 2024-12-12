function validarPin(pin) {
    const esValido = /^\d{4}$|^\d{6}$/.test(pin);
    alert(esValido);
}

