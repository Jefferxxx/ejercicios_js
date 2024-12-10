let numeroCuenta= parseInt(prompt("Ingrese un número entero positivo para cuenta atrás:"));
let cuentaAtras= [];
for(let i=numeroCuenta; i>=0; i--){
   cuentaAtras.push(i);
}
alert(`Cuenta atrás desde ${numeroCuenta}: ${cuentaAtras.join(", ")}`);
