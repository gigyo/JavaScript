// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
const hoy = new Date();
console.log(hoy);

// - La fecha de tu nacimiento
const miNacim = new Date(1976, 07, 13)
console.log(miNacim);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde= hoy.getTime() > miNacim.getTime();
console.log(masTarde)

// - Una variable que contenga el día de tu nacimiento
const dia = miNacim.getDate();
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = miNacim.getMonth() + 1;
console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos
const fechaCumple = miNacim.toLocaleDateString("es");
console.log(fechaCumple)