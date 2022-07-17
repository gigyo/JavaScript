const hacerclik = document.querySelector("#click")

hacerclik.addEventListener("click",() => {
    alert("Usted ha hecho clik");
})

$(() =>{

    $("#aqui").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})