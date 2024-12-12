function cantidadHarinaParaBizcocho(cantidadChocolate) {
    const proporcionHarinaPorChocolate = 100 / 10;
    const cantidadHarina = (cantidadChocolate * proporcionHarinaPorChocolate);
    return cantidadHarina;
}

const cantidadChocolate = parseFloat(prompt("Ingrese la cantidad de chocolate (gramos):"));
const harinaNecesaria = cantidadHarinaParaBizcocho(cantidadChocolate);
alert(`Cantidad de harina necesaria: ${harinaNecesaria} gramos`);