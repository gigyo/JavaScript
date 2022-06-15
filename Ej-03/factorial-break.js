 // - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
// una bifurcación if y una sentencia break

let i = 1;
let resultado = 1;

while (i <= 10) {
    resultado= resultado*i;
    i++;
    if (resultado == 720) {
        break;   
    }
        console.log(resultado);

}