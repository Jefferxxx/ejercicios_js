function piramideAsteriscos(n) {
    let resultado = '';
    for (let i = 1; i <= n; i++) {
        resultado += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    alert(resultado);
}
