const fraseUsuario=prompt("Ingrese una frase:");
const letraBuscar=prompt("Ingrese una letra a buscar:");
const ocurrencias=(fraseUsuario.match(new RegExp(letraBuscar, 'g')) || []).length;
alert(`La letra "${letraBuscar}" aparece ${ocurrencias} veces en la frase.`);
