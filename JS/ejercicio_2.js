const contrasenaGuardada = "ñeño123";

function esAlfanumerico(valor) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(valor);
}

let contrasenaUsuario = prompt("Por favor, ingresa la contraseña:");

while (!esAlfanumerico(contrasenaUsuario)) {
    contrasenaUsuario = prompt("Entrada inválida. Por favor, ingresa una contraseña alfanumérica:");
}

if (contrasenaUsuario.toLowerCase() === contrasenaGuardada.toLowerCase()) {
    console.log("La contraseña es correcta.");
} else {
    console.log("La contraseña es incorrecta.");
}