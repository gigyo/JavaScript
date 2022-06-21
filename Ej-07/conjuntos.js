// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const familia= ["Nico", "Luli", "Gigi", "Rami", "Mika"];
const miFamilia = new Set(familia);
// const miFamilia = new Set("Rami", "Gigi", "Luli", "Mika")
console.log(miFamilia);

miFamilia.add("Gigi");
console.log(miFamilia);

miFamilia.add("Javascript");
console.log(miFamilia);
