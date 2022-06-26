
// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
function siempreSi() {
    return true;
}
console.log(siempreSi());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const saludo = setTimeout(hola, 5000);

async function hola() {
    b = 'hola soy una Promesa!';
    return b;
  }

// - Una función generadora de índices pares automáticos

function* idPares() {
    let id = 0;
    while(true) {
        id = id + 2;
        yield id 
    }
}
const idP = idPares();
// console.log(idP.next().value);
// console.log(idP.next().value);
// console.log(idP.next().value);
// console.log(idP.next().value);
// console.log(idP.next().value);
// console.log(idP.next().value);
// console.log(idP.next().value);


