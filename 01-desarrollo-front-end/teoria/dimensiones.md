# Dimensiones

## Ancho y alto

- `width` para ancho

- `height` para alto

En este ejemplo se aplico en los `div`, pero tambien se puede aplicar en los `p`, en todas las etiquetas que sean en bloque (por eso en `span` no aplica, porque es elemento en linea).

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/ce3ec9fb-2329-4536-aabe-0fac4c1addd2)

```CSS
    div {
      background-color: dodgerblue;
      margin: 5px;
    }
    .a {
      width: 100px;
      height: 100px;
    }
    .b {
      width: 500px;
      height: 250px;
    }
    .c {
      width: 800px;
      height: 600px;
    }
  </style>
```

---

## Ancho maximo y minimo

Si usamos `max-width` evitamos el scroll en x cuando la pantalla es mas angosta que ese ancho maximo; esto no sucede si se tiene solo el `width`.

Si le doy tanto maximo como minimo, si la pantalla es mas chica que el minimo establecido tengo scroll en x:

```CSS
.p-3 {
  max-width: 1000px;
  min-width: 800px;
}
```

---

## Medidas absolutas

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/8f8992bf-3d4c-4f6e-a1bc-2f8d969fdc96)

---

-> Lo mismo pasa con el alto

---

# Ejemplos para ejercicios de la sección
Basándote en la imagen y las pistas, crea el código html y su estilo:

Ejemplo: hay un recuadro rojo, con el texto blanco


Solución:

```
<!DOCTYPE html>
<html>
<head>
<style>
  .caja {
    width: 100px;
    height: 100px;
    background-color: red;
    color: white;
  }
</style>
</head>
<body>
  <p class="caja">p.caja<br>100x100px</p>
</body>
</html>
```

Las pistas eran:

- Es un párrafo con clase caja: p.caja

- Sus dimensiones son 100x100 píxeles: 100x100px

- El color de fondo es rojo.

- El color del texto es blanco.

---