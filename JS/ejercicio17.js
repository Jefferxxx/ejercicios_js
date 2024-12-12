function volumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

const radioEsfera = 5;
alert(`El volumen de la esfera es: ${volumenEsfera(radioEsfera)} unidades cúbicas`);