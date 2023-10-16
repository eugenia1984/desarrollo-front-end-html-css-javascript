# DIMENSIONES - Ejercicios básicos

Basándote en la imagen y las pistas, crea el código html y su estilo:


## EJERCICIO 1:

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/6bf8af54-d935-431d-8b36-41f6ed764134)

---

## EJERCICIO 2:

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/57f83602-6c86-41c1-91e2-86318a3c8b58)

---

## EJERCICIO 3:

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/f40638d5-ddad-495e-a837-ee172f7df213)


---

SUGERENCIA: Si aún no te ves capaz, vuelve a ver los vídeos de esta sección que aún no dominas. Intenta no hacer trampas y mirar la solución sin antes haber repasado las lecciones.

---


## Resolucion

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/99fa7b5b-77c5-4c29-ac1b-5fa428f9ecec)


```
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dimensiones</title>
  <style>
    .caja {
      width: 100%;
      font-size: 32px;
      color: white;
      background-color: blue;
      margin: 0px
    }

    h3 {
      background-color: black;
      color: orangered;
      font-size: 24px;
      width: 50%;
    }

    .ejercicio-3 p {
      background-color: gray;
      color: white;
      width: 250px;
      height: 200px;
      font-size: 20px;
    }

    .ejercicio-3 b {
      color: black;
      font-size: 16px;
    }
  </style>
</head>

<body>
  <header>
    <h1>Dimensiones</h1>
  </header>
  <main>
    <section>
      <h2>Ejercicio 1</h2>
      <div class="ejercicio-1">
        <p class="caja">p.caja</p>
        <p class="caja">Ancho 100%</p>
        <p class="caja">Texto 32px</p>
      </div>
    </section>
    <section>
      <h2>Ejercicio 2</h2>
      <h3>Encabezado de nivel 3 con texto en 24px y un ancho del 50%</h3>
    </section>
    <section class="ejercicio-3">
      <h2>Ejercicio 3</h2>
      <p>Este es un texto de prueba que tiene unas dimensiones de 250 pixeles de ancho por 200 pixeles de alto y un
        texto de 20 pixeles de color blanco con un fondo de color gris. <b>Además este texto de color negro de 16 px
          está dentro de una etiqueta b</b></p>
    </section>
  </main>
</body>

</html>
```
---
