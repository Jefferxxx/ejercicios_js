const contraseñaCorrecta="contraseña"; 
while(true){
   let contraseñaIngresada= prompt("Introduzca la contraseña:");
   if(contraseñaIngresada===contraseñaCorrecta){
      alert("Contraseña correcta.");
      break;
   }else{
      alert("Contraseña incorrecta, intente nuevamente.");
   }
}
