# MPG Insolvencias - sitio web

Sitio estático en HTML, CSS y JavaScript. No necesita servidor, Node ni Cloudflare: se sube a cualquier hosting (cPanel, Apache, Netlify, GitHub Pages).

## Estructura

```
/
├── index.html                                  Inicio
├── insolvencia-persona-natural.html            Insolvencia de persona natural
├── insolvencia-empresarial.html                Insolvencia empresarial
├── contabilidad-revision-fiscal.html           Contabilidad y revisión fiscal
├── contabilidad-conjuntos-residenciales.html   Contabilidad para conjuntos residenciales
├── nosotros.html                               Nosotros
├── procesos.html                               Procesos concursales
├── contacto.html                               Contacto (formulario que continúa por WhatsApp)
├── politica-de-datos.html                      Política de tratamiento de datos (borrador)
├── favicon.svg
├── robots.txt, sitemap.xml, .htaccess
└── assets/
    ├── css/
    │   ├── base.css         Variables de marca, reinicio y tipografía
    │   ├── layout.css       Contenedor, secciones y rejillas
    │   └── components.css   Componentes (botones, encabezado, tarjetas, formulario...)
    └── js/
        ├── menu.js          Menú móvil
        └── contact-form.js  Validación del formulario y envío a WhatsApp
```

## Convenciones

- **CSS:** nomenclatura BEM (`.bloque__elemento--modificador`). Los colores y la tipografía están como variables al inicio de `base.css`; para cambiar la identidad basta con editar ahí.
- **HTML:** cada página repite el mismo encabezado y pie de página. Si cambia el menú, actualícelo en los 9 archivos.
- **Iconos:** SVG en línea, sin librerías.
- **Orden de carga del CSS:** `base.css`, `layout.css`, `components.css`.

## Probar en local

```
python3 -m http.server 8080
```

Abra http://localhost:8080 (también funciona abriendo `index.html` directamente).

## Publicar

Suba todo el contenido a la raíz del hosting. No borre la carpeta `/procesos/` del sitio actual: contiene los PDF.

## Editar contenidos frecuentes

- **Teléfono, correo y dirección:** están repetidos en el pie de página de cada HTML, en `contacto.html` y en los datos estructurados (JSON-LD) del `<head>`. El número de WhatsApp también está en `assets/js/contact-form.js`.
- **Publicar un PDF en `procesos.html`:** hay un comentario con el cambio exacto sobre la lista de procesos.
- **Fotos:** reemplace cada `<div class="photo-placeholder ...">` por una etiqueta `<img>`.

## Pendientes

- Imágenes reales del equipo y la oficina.
- Confirmar con el cliente: revisión o revisoría fiscal, apellido del fundador, correo corporativo, URLs de los PDF.
- Revisión legal de `politica-de-datos.html`.
- [No Verificado] Las URL de `sitemap.xml` y las etiquetas canonical asumen el dominio `https://mpginsolvencias.com`.
