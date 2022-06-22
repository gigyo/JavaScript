// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let misDatos ={
    nombre: "Gisela",
    apellido: "Dangelo",
    edad: 45,
    altura: 1.59,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
edad = (misDatos.edad);
console.log(edad);

edad2 = "edad";
console.log(misDatos[edad2]);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaPersonas= [
    {
        nombre: "Priscila",
        apellido: "Finamore",
        edad: 44,
        altura: 1.75,
        eresDesarrollador: false

    },
    {
        nombre: "Mai",
        apellido: "Castro",
        edad: 47,
        altura: 1.57,
        eresDesarrollador: false
    },
    misDatos
]
console.log(listaPersonas)


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = listaPersonas.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada)

