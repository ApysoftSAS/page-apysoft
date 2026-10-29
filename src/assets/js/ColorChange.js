// script.js
// Función para cambiar el estilo de la sección
function cambiarEstilo() {
    // Obtén todos los elementos con las clases "nav-option" y "nav-option1"
    var enlaces = document.querySelectorAll(".nav-option, .nav-option1");
    // Cambia las clases
    enlaces.forEach(function(enlace) {
      if (enlace.classList.contains("nav-option")) {
        enlace.classList.remove("nav-option");
        enlace.classList.add("nav-option1");
      } else {
        enlace.classList.remove("nav-option1");
        enlace.classList.add("nav-option");
      }
    });
  }
  // Agrega un evento de clic al div para llamar a la función después de que el DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logo").addEventListener("click", cambiarEstilo);
  });
  export { cambiarEstilo };
