const numeroPrimo=parseInt(prompt("Ingrese un número entero para verificar si es primo:"));
function esPrimo(num){
   for(let i=2;i<num;i++){
      if(num%i===0){
         return false;
      }
   }
   return num >1;
}
alert(`${numeroPrimo} es primo? ${esPrimo(numeroPrimo) ? 'Sí' : 'No'}`);
