/*
 * contact-form.js
 * Valida el formulario de contacto y, si todo es correcto, abre WhatsApp
 * con el mensaje ya armado. No envía datos a ningún servidor.
 */
(function () {
  "use strict";

  var NUMERO_WHATSAPP = "573116229310";
  var TIPOS_CLIENTE = ["Persona natural", "Empresa", "Conjunto residencial"];
  var SERVICIOS = [
    "Insolvencia de persona natural",
    "Insolvencia empresarial",
    "Contabilidad para conjuntos residenciales",
    "Contabilidad y revisión fiscal",
    "Otro"
  ];

  var form = document.getElementById("form-contacto");
  if (!form) return;

  function valor(nombre) {
    var campo = form.elements[nombre];
    return campo ? String(campo.value || "").trim() : "";
  }

  /* Devuelve un objeto { idDelCampo: "mensaje de error" } */
  function validar() {
    var errores = {};
    var nombre = valor("nombre");
    var correo = valor("correo");

    if (nombre.length < 2) errores.nombre = "Escriba su nombre";
    else if (nombre.length > 100) errores.nombre = "Máximo 100 caracteres";

    if (!/^[+\d][\d\s-]{6,19}$/.test(valor("telefono"))) errores.telefono = "Escriba un teléfono válido";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || correo.length > 255) errores.correo = "Escriba un correo válido";

    if (TIPOS_CLIENTE.indexOf(valor("tipo")) < 0) errores.tipo = "Seleccione el tipo de cliente";
    if (SERVICIOS.indexOf(valor("servicio")) < 0) errores.servicio = "Seleccione un servicio";
    if (valor("mensaje").length > 600) errores.mensaje = "Máximo 600 caracteres";

    if (!form.elements.autorizacion.checked) {
      errores.autorizacion = "Debe autorizar el tratamiento de sus datos personales";
    }
    return errores;
  }

  function limpiarErrores() {
    form.querySelectorAll(".field__error").forEach(function (nodo) { nodo.remove(); });
    form.querySelectorAll("[aria-invalid]").forEach(function (campo) {
      campo.removeAttribute("aria-invalid");
      campo.removeAttribute("aria-describedby");
    });
  }

  function mostrarErrores(errores) {
    var primero = null;
    Object.keys(errores).forEach(function (id) {
      var campo = document.getElementById(id);
      if (!campo) return;

      var mensaje = document.createElement("p");
      mensaje.id = id + "-error";
      mensaje.className = "field__error";
      mensaje.textContent = errores[id];

      campo.setAttribute("aria-invalid", "true");
      campo.setAttribute("aria-describedby", mensaje.id);
      campo.closest(".field").appendChild(mensaje);

      if (!primero) primero = campo;
    });
    if (primero) primero.focus();
  }

  function armarMensaje() {
    var lineas = [
      "Hola, quiero agendar una asesoría con MPG Insolvencias.",
      "Nombre: " + valor("nombre"),
      "Teléfono: " + valor("telefono"),
      "Correo: " + valor("correo"),
      "Tipo de cliente: " + valor("tipo"),
      "Servicio de interés: " + valor("servicio")
    ];
    if (valor("mensaje")) lineas.push("Mensaje: " + valor("mensaje"));
    return lineas.join("\n");
  }

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limpiarErrores();

    var errores = validar();
    if (Object.keys(errores).length) {
      mostrarErrores(errores);
      return;
    }

    var url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(armarMensaje());
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();
