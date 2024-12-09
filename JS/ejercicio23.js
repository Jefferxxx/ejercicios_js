function convertirvelocidad(kmh){
    return kmh / 3.6 ;
}

const velocidadkmh = 90;
console.log('la velocidad en m/s es: ${covertirvelocidad(velocidadkmh).toFixed(2)} m/s');