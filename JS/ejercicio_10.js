function iniciarPizzeria() {
    
    console.log("Bienvenido a la pizzería Bella Napoli.");
 
    let tipoPizza = prompt("¿Quieres una pizza vegetariana? (si/no)").toLowerCase();

    let ingredientes = ["Mozzarella", "Tomate"];

    if (tipoPizza === "si") {
        console.log("Ingredientes de pizzas vegetarianas:\n1. Pimiento\n2. Tofu");
        let ingredienteSeleccionado = prompt("Introduce el número del ingrediente que deseas:");

        if (ingredienteSeleccionado === "1") {
            ingredientes.push("Pimiento");
        } else if (ingredienteSeleccionado === "2") {
            ingredientes.push("Tofu");
        } else {
            console.log("Opción no válida.");
            return;
        }

        console.log("Has elegido una pizza vegetariana " + ingredientes.join(", ") + ".");
        
    } else if (tipoPizza === "no") {
        console.log("Ingredientes de pizzas no vegetarianas:\n1. Pepperoni\n2. Jamón\n3. Salmón");
        let ingredienteSeleccionado = prompt("Introduce el número del ingrediente que deseas:");

        if (ingredienteSeleccionado === "1") {
            ingredientes.push("Pepperoni");
        } else if (ingredienteSeleccionado === "2") {
            ingredientes.push("Jamón");
        } else if (ingredienteSeleccionado === "3") {
            ingredientes.push("Salmón");
        } else {
            console.log("Opción no válida.");
            return;
        }

        console.log("Has elegido una pizza no vegetariana con " + ingredientes.join(", ") + ".");
        
    } else {
        console.log("Opción no válida. Por favor, responde 'sí' o 'no'.");
    }
}

iniciarPizzeria();