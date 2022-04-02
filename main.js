//Variables
const btnNav = document.querySelector(".fa-bars")
const nav = document.querySelector(".nav")

//Evento para el boton de la barra de navegacion
btnNav.addEventListener("click", ()=> {
    nav.classList.toggle("show_nav")
})