let nombre = "Gisela";
let apellido = "Dangelo";


let persona = {
    
    apellido: apellido,
    nombre: nombre

}
// - Almacena el objeto anterior en la SessionStorage
console.log(sessionStorage.setItem("personasession", JSON.stringify(persona)));

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("persona", JSON.stringify(persona))
console.log(JSON.parse(localStorage.getItem("persona")))

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
var date = new Date();
var tiempo = (date.setTime(date.getTime()+(20000)));
document.cookie = "nombreC=" + nombre +";expires=20000" + new Date(tiempo).toUTCString()
console.log(document.cookie);


