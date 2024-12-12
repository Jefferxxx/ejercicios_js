function numeroATexto(num) {
    const textos = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];
    const resultado = (num >= 0 && num <= 5) ? textos[num] : 'Número fuera de rango';
    alert(resultado);
}