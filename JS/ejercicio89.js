function numeroAleatorioParImpar() {
    const numero = Math.floor(Math.random() * 10) + 1;
    const resultado = numero % 2 === 0 ? 'par' : 'impar';
    alert(`Número: ${numero}, Es ${resultado}`);
}
