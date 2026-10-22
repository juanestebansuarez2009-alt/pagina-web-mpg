(function () {
  "use strict";

  // Menú móvil
  var btn = document.querySelector("header button[aria-controls='menu-movil']");
  var menu = document.getElementById("menu-movil");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
  }

  // Formulario de contacto: valida y continúa por WhatsApp
  var form = document.querySelector("main form");
  if (!form) return;
  var WHATSAPP = "573116229310";
  var CLIENT_TYPES = ["Persona natural", "Empresa", "Conjunto residencial"];
  var SERVICES = [
    "Insolvencia de persona natural",
    "Insolvencia empresarial",
    "Contabilidad para conjuntos residenciales",
    "Contabilidad y revisión fiscal",
    "Otro"
  ];

  function val(name) {
    var el = form.elements[name];
    return el ? String(el.value || "").trim() : "";
  }

  function validate() {
    var e = {};
    var nombre = val("nombre");
    if (nombre.length < 2) e.nombre = "Escriba su nombre";
    else if (nombre.length > 100) e.nombre = "Máximo 100 caracteres";
    if (!/^[+\d][\d\s-]{6,19}$/.test(val("telefono"))) e.telefono = "Escriba un teléfono válido";
    var correo = val("correo");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || correo.length > 255) e.correo = "Escriba un correo válido";
    if (CLIENT_TYPES.indexOf(val("tipo")) < 0) e.tipo = "Seleccione el tipo de cliente";
    if (SERVICES.indexOf(val("servicio")) < 0) e.servicio = "Seleccione un servicio";
    if (val("mensaje").length > 600) e.mensaje = "Máximo 600 caracteres";
    if (!form.elements.autorizacion.checked) e.autorizacion = "Debe autorizar el tratamiento de sus datos personales";
    return e;
  }

  function clearErrors() {
    form.querySelectorAll("[id$='-error']").forEach(function (n) { n.remove(); });
    form.querySelectorAll("[aria-invalid]").forEach(function (n) {
      n.removeAttribute("aria-invalid");
      n.removeAttribute("aria-describedby");
    });
  }

  function showErrors(errors) {
    var first = null;
    Object.keys(errors).forEach(function (k) {
      var el = document.getElementById(k);
      if (!el) return;
      el.setAttribute("aria-invalid", "true");
      el.setAttribute("aria-describedby", k + "-error");
      var p = document.createElement("p");
      p.id = k + "-error";
      p.className = "mt-1 text-[14px] text-destructive";
      p.textContent = errors[k];
      var host = k === "autorizacion" ? el.closest("label").parentNode : el.parentNode;
      host.appendChild(p);
      if (!first) first = el;
    });
    if (first) first.focus();
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    clearErrors();
    var errors = validate();
    if (Object.keys(errors).length) { showErrors(errors); return; }
    var lines = [
      "Hola, quiero agendar una asesoría con MPG Insolvencias.",
      "Nombre: " + val("nombre"),
      "Teléfono: " + val("telefono"),
      "Correo: " + val("correo"),
      "Tipo de cliente: " + val("tipo"),
      "Servicio de interés: " + val("servicio")
    ];
    if (val("mensaje")) lines.push("Mensaje: " + val("mensaje"));
    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();
