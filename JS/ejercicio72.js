const palabraParaMostrar=prompt("Ingrese una palabra:");
for(let letra of palabraParaMostrar.split('').reverse()){
   alert(letra);
}
