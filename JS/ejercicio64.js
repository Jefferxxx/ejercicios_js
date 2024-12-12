let numeroIngresado= parseInt(prompt("Ingrese un número entero positivo:"));
let impares= [];
for(let i=1; i<=numeroIngresado; i+=2){
   impares.push(i);
}
alert(`Números impares desde 1 hasta ${numeroIngresado}: ${impares.join(", ")}`);
