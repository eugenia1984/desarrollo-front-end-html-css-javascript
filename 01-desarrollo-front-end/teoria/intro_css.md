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
