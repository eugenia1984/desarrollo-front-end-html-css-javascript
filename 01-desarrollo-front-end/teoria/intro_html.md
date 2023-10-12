# <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Introduccion a HTML5

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/>  Estructura básica de html: `html:5`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>

  </body>
</html>
```

Dejamos solo lo más básico, aca borramos las meta tags.

- `<!DOCTYPE html>` documento HTML version 5

- `<html>` con el `<head>` que tendrá el `<title>` (lo único que se ve en el navegador web, en la pestaña del navegador) y luego estan las `<metatag>` (ayudan al SEO). También se pueden tener las etiquetas `<link>` para agregar las hojas de estilo

**etiquetas `meta`**: definien la codificación UTF-8, pueden setear el color de la barra del navegador, pueden mostrar la imagen al pasar le link de la web, y dan información para posicionar el SEo como autor, copyright, description, keywords(el video es viejo y pone lo de robots pero eso NO se usa, Google lo penaliza), etc, también podemos setear zoom y excalas de la web.

- `<body>` todo lo que se ve de la web. Casi al cerrar puede tener los `<scrip>` para enlazar a archivos JavaScript o librería de jQuery.

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Etiquetas de bloque y linea

- Etiquetas de bloque: `<div>`, `<p>`, `<h1>`, ..., `<h6>`

- Etiquetas en linea: `<span>`, `<i>`, `<b>`, `<strong>`

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Primer contacto

- `<h1>`, ..., `<h6>`: encabezados van del h1 al h6, hay un solo h1 por página, a medida que va descendiendo del número se va achicando el tamaño del texto

- `<hr>` hace una división y ademas genera un salto de linea

- `<br>` salto de línea luego de la etiqueta

- `<b>`: bold, pone el texto en negrita, pero si quiero sematicamente indicar que es un texto importante uso: - `<strong>`

- `<u>`: **underline** para subrayar 

- `<i>`: **italic**, para italica, en cursiva

- `<s>`: tara tachar un texto

- `<p>`: **paragraph**, para párrafos.

### Anidar una etiqueta y jerarquías

Si **anido** una etiqueta, lo que hago es **envolver** una etiqueta dentro de otra, como por ejemplo: `<p>En esta horación tengo como palabra principal: <strong>importante</strong></p>`.

Otro ejemplo es la etiqueta `<body>` que anida todas las etiquetas que crean la estructura de lo que se ve.

**jerarquia** tiene que ver con la herencia, tenemos **etiquetas padres**(las que anidan) y **etiquetas hijas**(las anidadas) / **etiquetas hermanas** (las que están al mismo nivel, por ejemplo las `<li>` dentro de las `<ul>` ú `<ol>`)

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Formatear textos

- `<sup>`: supindice, empequeñece el texto y lo eleva

- `<sub>`: subindice, empequeñece el texto y lo baja

- `<var>`: marca en cursiva

- `<code>`: mostrar codigos

- `<q>`: quote, cita

- `<cite>`: cita, por ejemplo para el nombre de un libro

- `<abbr title="">`: abreviatura, en el titulo va el significado de la abreviatura

- `<samp>`: con la fuente como si fuera consola

- `<kbd>`: para abreviaciones de teclas, como qeu hay que tocar en el teclado

- `<pre>`: preformatea el texto, tabuladores, espacios en blanco y saltos de lineas

- `<em>`: emphasis, sustituye a italic

- `<strong>` (más semántica) - `<b>`

- `<ins>`

- `<mark>`: para remarcar como con un resaltador

-`<details><sumary></sumary></details>`: se usan en conjunto para crear un widget interactivo qeu el usuario puede abrir y cerrar, como un acordeon, pero nativo de HTML

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Etiquetas semáticas


**elemento semantico** las etiquetas de apertura y cierre y todo lo que contiene dentro, describe claramente su significado, tanto para el navegador, como para el desarrollador. Bueneo para el SEO.

- `<header>`: cabecera, con el menu de navegación, el logo, la portada, etc.

- `<footer>`: footer, el pie de página: mapa de sitio, legales, configuración de cookies, etc

- `<main>`: donde va todo el contenido que no es header ni footer

- `<section>`: para separar el main en secciones

- `<article>`: debe tener sentido independiendte por si mismo, suelen tener una cabecera con un párrafo.

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Atributos en etiquetas

Características de las etiquetas o elementos html. Algunos ejemplos:

- `<img src="" alt="" title="" width="" height="" style="">`

- `<a href="" target="" title="" style=""></a>`

- `<input type="" value="" size="" max="" maxlength="" placeholder="" title="" required autofocus>`

- Los atibutos pueden contener valores (entre "") o no contener valores

- Puede haber tantos atributos como requiera la etiqueta, hay algunos que son obligatorios y otros opcionales.

---


##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Atributos id y clase

---

##  <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/>

---