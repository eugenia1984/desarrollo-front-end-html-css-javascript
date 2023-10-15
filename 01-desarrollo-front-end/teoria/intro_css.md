# <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/> Introducción a CSS

---

##  <img width="30" height="30" src="https://img.icons8.com/color/48/css3.png" alt="css3"/> Tarea de la seccion

- Crea la siguiente estructura de archivos dentro de la carpeta **css**:

```
> introduccion-a-css
    sintaxis-de-css.html
    maneras-de-inserar-css.html
    comportamiento.de.visualizacion.html
    salectores-simples.html
    selector-de-descendientes.html
    solector-de-hijos.html
    selector-de-hermanos-adyacentes.html
    selector-general-de-hermanos.html
```

---

##  <img width="30" height="30" src="https://img.icons8.com/color/48/css3.png" alt="css3"/> Sintaxis

- **Selectores**: apunta al o los elementos HTMl a los que deseamos aplica estilos

- **propiedades**: definen caracterisiticas que le vamos a dar o agregar al elemento o los elementos

- **valoreS**: especifican la caracteristica exacta de dicha propiedad

-> **declaración** es el conjunto de propiedad y valor, entre la propiedad y el valor tenemos **:** y finaliza con **;**

-> **bloque de declaración**: tiene una o más declaraciones, encerradas entre **{}**

Ejemplo:

```CSS
p {
  color: #fff;
  sont-size: 32px;
}
```

-> comentario: van entre `/* */`

```CSS
p {
  /* Ejemplo de comentario*/
  color: #fff;
  sont-size: 32px;
}
```


---

##  <img width="30" height="30" src="https://img.icons8.com/color/48/css3.png" alt="css3"/> Maneras de agregar CSS

- **En linea**, la menos recomendada.
  
```HTML
<p style="color: mediumturquoise">Estilo en línea</p>
```

- **estilo interno**, dentro de la etqieuta  `<style>` en el `<head>`

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="https://img.icons8.com/color/30/css3.png" type="image/png">
  <title>SManeras de insertar CSS</title>
  <style>
    #interno {
      color: palevioletred;
    }
  </style>
</head>
<body>
  <p id="interno">Estilo interno</p>
</body>
</html>
```

- **Estilo externo**, con un archivo **.css** y haciendo referencia con la etiqueta `<link>`

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="https://img.icons8.com/color/30/css3.png" type="image/png">
  <link rel="stylesheet" href="./estilos.css">
  <title>SManeras de insertar CSS</title>
</head>
<body>
  <p id="externo">Estilo externo</p>
</body>
</html>
```

-> Asi se ve en el navegador:

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/f5bc80f8-4101-4be7-88fa-2a7c5114808b)

---

##  <img width="30" height="30" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>  Prioridad de estilos

- El estilo en linea tiene mas peso que el estilo interno o externo

- Los estilo interno o externo tienen la misma preponderancia, solo depende de quien se aplique primero si primero tenemos la etqieuta `<link>` y luego la `<style></style>`, por cascada si la propiedad se repite se vera la ultima, es decir la de `<style></style>`, la última que encuentra.

---


![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/0ff1e574-91f1-4513-8f81-f6d4b810af6f)

---

## Selectores simples

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/8f8120ec-80cf-40a9-bd40-be4a1aab7e2b)

---

## Selectores descendientes

![image](https://github.com/eugenia1984/desarrollo-front-end-html-css-javascript/assets/72580574/ec4c263c-bde6-4132-99d5-0ed0f4fba0b4)

---
