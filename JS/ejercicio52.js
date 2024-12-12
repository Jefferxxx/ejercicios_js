let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):").toLowerCase();
let horasTrabajadas = parseInt(prompt("Ingrese el total de horas trabajadas:"));
let pagoPorHora = tipoEmpleado === "planta" ? 20000 : 10000;
let totalPago = horasTrabajadas * pagoPorHora;
alert(`Total a pagar: $${totalPago}`);
