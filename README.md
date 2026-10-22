# MPG Insolvencias - sitio web estático

Sitio en HTML, CSS y JavaScript puro. No necesita servidor de aplicaciones, Node ni Cloudflare: basta con subir los archivos a cualquier hosting (cPanel, Apache, Netlify, GitHub Pages, etc.).

## Estructura

| Archivo | Contenido |
| --- | --- |
| `index.html` | Inicio |
| `insolvencia-persona-natural.html` | Insolvencia de persona natural |
| `insolvencia-empresarial.html` | Insolvencia empresarial |
| `contabilidad-revision-fiscal.html` | Contabilidad y revisión fiscal |
| `contabilidad-conjuntos-residenciales.html` | Contabilidad para conjuntos residenciales |
| `nosotros.html` | Nosotros |
| `procesos.html` | Procesos concursales |
| `contacto.html` | Contacto (formulario que continúa por WhatsApp) |
| `politica-de-datos.html` | Política de tratamiento de datos (borrador para revisión legal) |
| `assets/css/styles.css` | Estilos (identidad MPG: guinda, dorado, Manrope) |
| `assets/js/main.js` | Menú móvil y formulario |
| `.htaccess`, `robots.txt`, `sitemap.xml` | Configuración Apache y SEO |

## Probar en local

```
python3 -m http.server 8080
```

Abra http://localhost:8080. También funciona abriendo `index.html` directamente en el navegador.

## Publicar

Suba todo el contenido de esta carpeta a la raíz del hosting. No borre la carpeta `/procesos/` que ya existe en el sitio actual: contiene los PDF y las URL antiguas deben seguir funcionando.

## Pendientes

- Reemplazar los marcadores de foto por imágenes reales.
- Confirmar con el cliente: revisión o revisoría fiscal, apellido del fundador, correo corporativo, URLs de los PDF en `procesos.html`.
- Revisión legal de `politica-de-datos.html`.
- [No Verificado] Las URL y los dominios del sitemap y de las etiquetas canonical asumen `https://mpginsolvencias.com`.
- Los CSS se generaron desde el proyecto TanStack Start anterior (commit `b40caa5` en el historial de este repositorio).
