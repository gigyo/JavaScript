// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const logger = require("./logger");

// - Registra el error en un archivo a través de un try...catch


function devolverAlgo(){
    throw new Error("Este es un mensaje personalizado xq no sabia que poner");
}

try {
    devolverAlgo();
} catch (error) {

    logger.log("error", error);
    
}