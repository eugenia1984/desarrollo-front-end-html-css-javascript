# <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> RUTAS

## <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Parte de una URL

`https://www.unaweb.com/academia/curso-desarrollo.html`

-> **http** (protocolo de transferencia de hipertexto) ò **https** (protocolo seguro de transferencia de hipertexto)

-> **www** es el **prefijo de dominio**

-> **unaweb.com** es el **dominio**, el nombre de la web

-> **/academia/** es la **ruta**, una dirección que apunta a un recurso en concreto

-> **curso-desarrollo.html** es el **nombre del archivo**

---

## <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Ruta relativa

Basándonos en la siguiente estructura de archivos, vamos a ver como podemos movernos entre carpetas a través de rutas escritas en formato de texto.

```
📁 miweb
    📁 html
        📑 clase-1.html
        📑 clase-2.html
        📁 ejercicios
            📑 ejercicio-1.html
            📑 ejercicio-2.html
    📁 css
        📑 estilo-1.css
        📑 estilo-2.css
    📁 imagenes
        📑 imagen-1.jpg
        📑 imagen-2.jpg
    📑 pagina-principal.html
```


Imagina que estás trabajando en el archivo **pagina-principal.html** y quieres apuntar a otro archivo de los que ves en esa estructura, bien sea que quieres vincularlo a una hoja de estilos, insertar una imagen en la página, o enlazarla a otra página de tu web a través de un enlace.

Lo primero que debemos saber es como entrar o salir de carpetas:

- Para entrar en una carpeta, escribimos su nombre seguido del signo ``/``, así: ``nombre-carpeta/``

- Para salir de una carpeta, escribimos dos veces el signo punto seguido de /, así: ``../``

Ahora que ya sabemos como entrar y salir de carpetas vamos a ver algunos ejemplo.

---

### EJEMPLO 1

Si quieres apuntar desde ``pagina-principal.html`` a la ``imagen-1.jpg``, se que desde la posición en la que estas, debes entrar primero en la carpeta imagenes para luego acceder al archivo ``imagen-1.jpg``.

Así que primero accedes a la carpeta imagenes, así: ``imagenes/``

Y después puedes agregar el nombre del archivo: ``imagenes/imagen-1.jpg``

---

### EJEMPLO 2

- Ahora imagina que estás en el archivo ``ejercicio-1.html`` y necesitas enlazarlo al archivo ``pagina-principal.html`` para poder volver a la página principal.

- Desde la posición en la que estas, debes salir primero de la carpeta ejercicios: ``../``

- Ahora estas en la carpeta html, así que debes salir de ella: ``../../``

- Por fin estas donde se encuentra el archivo, solo queda escribirlo: ``../../``pagina-principal.html

---


### EJEMPLO 3

- Te encuentras en la ``clase-1.html`` y necesitas enlazarla al archivo ``estilo-1.css`` para poder aplicarle estilo.

- Desde la posición en la que estas, debes salir primero de la carpeta html: ``../``

- Ahora entrar en la carpeta css, así que debes salir de ella: ``../css/``

- Por fin estas donde se encuentra el archivo, solo queda escribirlo: ``../css/``estilo-1.css


---

### EJEMPLO 4

- Te encuentras en la ``pagina-principal.html`` y necesitas enlazar el ``ejercicio-2.html``.

- Desde la posición en la que estas, debes entrar primero de la carpeta html: ``html/``

- Ahora entrar en la carpeta ejercicios: ``html/ejercicios/``

- Por fin estas donde se encuentra el archivo, solo queda escribirlo: ``html/ejercicios/ejercicio-1.html``


---

Como has visto siempre hay que tener en cuenta donde te encuentras exactamente para apuntar al otro archivo, al conjunto de la ruta completa escrita desde donde te encuentras hasta donde esta el archivo, incluido el nombre del archivo y su extensión, se le denomina ruta relativa.



- Por lo tanto todos estos resultados obtenidos en los ejemplos son rutas relativas:

``imagenes/imagen-1.jpg``

``../../pagina-principal.html``

``../css/estilo-1.css``

``html/ejercicios/ejercicio-1.html``

Porque dependen siempre de la posición del archivo desde donde se enlaza.

---

## <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Ruta absoluta

Basándonos de nuevo en la siguiente estructura de archivos y sabiendo ya como movernos entre carpetas.

``
📁 miweb
    📁 html
        📑 clase-1.html
        📑 clase-2.html
        📁 ejercicios
            📑 ejercicio-1.html
            📑 ejercicio-2.html
    📁 css
        📑 estilo-1.css
        📑 estilo-2.css
    📁 imagenes
        📑 imagen-1.jpg
        📑 imagen-2.jpg
    📑 pagina-principal.html
``


La diferencia entre una ruta absoluta de la relativa es que no necesitas saber donde te encuentras, ya que se debe escribir la dirección completa desde su carpeta raíz(sin incluirla).

---

## EJEMPLO 1:

- Si quieres apuntar desde ``pagina-principal.html`` a la ``imagen-1.jpg``.

- Primero accedes a la carpeta imagenes: ``imagenes/``

- Y después puedes agregar el nombre del archivo: ``imagenes/imagen-1.jpg``

---


### EJEMPLO 2:

Si quieres apuntar desde el archivo ``ejercicio-1.html`` al archivo ``pagina-principal.html`` para poder volver a la página principal.

Como esta en la carpeta raíz, tan solo escribe el nombre de archivo: ``pagina-principal.html``

---

## EJEMPLO 3:

Te encuentras en la ``clase-1.html`` y necesitas enlazarla al archivo estilo-1.css para poder aplicarle estilo.

Primero accedes a la carpeta css: ``css/``

Por fin estas donde se encuentra el archivo, solo queda escribirlo: ``css/estilo-1.css``

---

## EJEMPLO 4:

- Te encuentras en la ``pagina-principal.html`` y necesitas enlazar el ``ejercicio-2.html``.

- Primero accedes a la carpeta html: ``html/``

- Ahora entra en la carpeta ejercicios: ``html/ejercicios/``

- Por fin estas donde se encuentra el archivo, solo queda escribirlo: ``html/ejercicios/ejercicio-1.html``



Como has visto no hay que tener en cuenta donde te encuentras para apuntar al otro archivo, al conjunto de la ruta completa escrita desde la carpeta raíz hasta donde esta el archivo, incluido el nombre del archivo y su extensión, se le denomina ruta absoluta.



Por lo tanto todos estos resultados obtenidos en los ejemplos son rutas absolutas:

``imagenes/imagen-1.jpg``

``pagina-principal.html``

``css/estilo-1.css``

``html/ejercicios/ejercicio-1.html``

Porque NO dependen de la posición del archivo desde donde se enlaza.

---

## <img width="30" height="30" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> Ejercicios básicos

``
📁 Cursos
    📁 html
        📑 html-1.html
        📑 html-2.html
        📁 ejercicios
            📑 ejercicio-html-1.html
            📑 ejercicio-html-2.html
    📁 css
        📑 css-1.html
        📑 css-2.html
        📁 ejercicios
            📑 ejercicio-css-1.html
            📑 ejercicio-css-2.html
``


Basándote en esta estructura de archivos, escribe las siguientes rutas tanto relativas como absolutas:

Recuerda que para rutas absolutas no importa donde te encuentres.



1. De html-1 a html-2: `` ``

2. De html-1 a ejercicio-html-1: `` ``

3. De ejercicio-html-2 a html-2: `` ``

4. De css-1 a html-1: `` ``

5. De ejercicio-css-2 a css-2: `` ``

6. De ejercicio-css-2 a ejercicio-html-2: `` ``

SUGERENCIA: Si aún no te ves capaz, vuelve a ver los vídeos de esta sección que aún no dominas. Intenta no hacer trampas y mirar la solución sin antes haber repasado las lecciones.


---