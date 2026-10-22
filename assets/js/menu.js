/*
 * menu.js
 * Abre y cierra el menú de navegación en pantallas pequeñas.
 */
(function () {
  "use strict";

  var boton = document.querySelector(".menu-toggle");
  var menu = document.getElementById("menu-movil");
  if (!boton || !menu) return;

  boton.addEventListener("click", function () {
    var abrir = menu.hidden;
    menu.hidden = !abrir;
    boton.setAttribute("aria-expanded", String(abrir));
    boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
  });
})();
