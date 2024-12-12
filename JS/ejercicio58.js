let mesZodiacal = prompt("Ingrese el nombre del mes:");
mesZodiacal = mesZodiacal.toLowerCase();
let signoZodiacal;

if (mesZodiacal === "enero") {
    signoZodiacal = "Capricornio / Acuario";
} else if (mesZodiacal === "febrero") {
    signoZodiacal = "Acuario / Piscis";
} else if (mesZodiacal === "marzo") {
    signoZodiacal = "Piscis / Aries";
} else if (mesZodiacal === "abril") {
    signoZodiacal = "Aries / Tauro";
} else if (mesZodiacal === "mayo") {
    signoZodiacal = "Tauro / Géminis";
} else if (mesZodiacal === "junio") {
    signoZodiacal = "Géminis / Cáncer";
} else if (mesZodiacal === "julio") {
    signoZodiacal = "Cáncer / Leo";
} else if (mesZodiacal === "agosto") {
    signoZodiacal = "Leo / Virgo";
} else if (mesZodiacal === "septiembre") {
    signoZodiacal = "Virgo / Libra";
} else if (mesZodiacal === "octubre") {
    signoZodiacal = "Libra / Escorpio";
} else if (mesZodiacal === "noviembre") {
    signoZodiacal = "Escorpio / Sagitario";
} else if (mesZodiacal === "diciembre") {
    signoZodiacal = "Sagitario / Capricornio";
} else {
    signoZodiacal = "Mes no válido.";
}
alert(`Signo zodiacal: ${signoZodiacal}`);
