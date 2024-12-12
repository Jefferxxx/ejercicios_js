function validarContrasena(contrasena) {
    const longitudValida = contrasena.length >= 8 && contrasena.length <= 12;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneDigito = /\d/.test(contrasena);
    
    return longitudValida && tieneMayuscula && tieneMinuscula && tieneDigito;
}

console.log(validarContrasena("Abc12345")); // true