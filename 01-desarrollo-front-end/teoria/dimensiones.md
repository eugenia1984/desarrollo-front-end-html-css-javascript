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

-> Lo mismo pasa con el alto

---