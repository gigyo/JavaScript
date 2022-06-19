// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

let listacompras =  ["Jabón", "Azúcar", "Sal gruesa", "Sal fina", "Nueces", "Té verde", "Melón"];

listacompras.push("Aceite de girasol");
console.log(listacompras);

listacompras.pop();
console.log(listacompras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let peliculas = [
    {
        titulo: "El laberinto", director: " Eric Rattray", fecha: 1986
    },
    {
        titulo: "Donde viven los monstruos", director: "Spike Jonze", fecha:  2009
    },
    {
        titulo: "Las crónicas de Narnia", director: "Andrew Adamson", fecha:  2005
    },
    {
        titulo: "La historia sin fin", director: "Wolfgang Petersen", fecha:  1984
    },
    {
        titulo: "El libro de la selva", director: "Jon Favreau", fecha:  2016
    }]

    // - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let posterioral2010 = peliculas.filter( Obj => Obj.fecha > 2010);
console.log(posterioral2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newDirectores = peliculas.map(({director}) => {
    return [director]
});

console.log(newDirectores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newTitulos = peliculas.map(({titulo}) => {
    return [titulo]
});
console.log(newTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const direcYtitu = newDirectores.concat(newTitulos);
console.log(direcYtitu);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const otralista = [... newDirectores, ... newTitulos];
console.log(otralista);
