function velocidadproyectil(distanciaKm, tiempoMinutos) {
    const distanciaM = distanciaKm * 1000; 
    const tiempoSegundos = tiempoMinutos * 60; 
    return distanciaM / tiempoSegundos;
}

const distancia = 2; 
const tiempo = 5; 
alert(`La velocidad del proyectil es: ${velocidadproyectil(distancia, tiempo)} m/s`);