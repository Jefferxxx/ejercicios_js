let cantidadInvertir= parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnualInv= parseFloat(prompt("Ingrese el interés anual (%):"))/100;
let añosInversion= parseInt(prompt("¿Cuántos años durará la inversión?"));

for(let año=1; año<=añosInversion; año++){
   cantidadInvertir *= (1 + interesAnualInv);
   alert(`Capital al final del año ${año}: $${cantidadInvertir.toFixed(2)}`);
}
