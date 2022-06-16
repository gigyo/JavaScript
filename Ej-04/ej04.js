//ej04.js
// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre, - Otra cadena de texto con tu Apellido

let nombre = "Gisela";
let apellido = "Dangelo";

let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas. 
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMayus);
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// - Una variable que contenga la primera letra del Nombre, - Otra variable que contenga la última letra del Apellido

cantletras = estudiante.length;
console.log(cantletras);
primerletra = estudiante.charAt(0);
ultimaletra = estudiante.charAt(cantletras - 1);
console.log(primerletra);
console.log(ultimaletra);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

console.log(estudiante.replace(/ /, ''));
console.log(estudiante.includes("Gisela"));

