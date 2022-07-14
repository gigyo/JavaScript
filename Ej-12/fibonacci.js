// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de 
//números de la secuencia de Fibonacci 
//(Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función


function fibonacci(num){
    if (num > 0) {
        
        let a = 1;
        let b = 1;
        let resultado = [ a, b];

        for (let i = 1; i <= num - 2; i++) {
    
           suma = a + b;
           resultado.push(suma);
           b = a;
           a = suma;

        }
        
        console.log(resultado);
    }
}

fibonacci(30);
