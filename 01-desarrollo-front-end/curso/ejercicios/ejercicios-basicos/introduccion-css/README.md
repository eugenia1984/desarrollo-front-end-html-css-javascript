# Ejercicios básicos


## 📑 EJERCICIO 1: Crea selectores simples dentro del elemento style que apunten a:


```
<!DOCTYPE html>
<html>
<head>
<style>
</style>
</head>
<body>
  <p>3<sup>3</sup> x 10<sup>3</sup> = 27000</p>
  <p>Calle Juan Pescador n<sup>o</sup> 52</p>
  <p>Oxigeno es igual a O<sub>2</sub></p>
  <p><q>En la vida hay algo peor que el fracaso: el no haber intentado nada.</q> Franklin D. Roosvelt</p>
  <p>La <abbr title="Organización de las Naciones Unidas">ONU</abbr> es una organización internacional</p>
  <p>Para guardar un archivo en sublime text pulsa <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
</body>
</html>
```

- Todos los párrafos.

- Todos los elementos superíndice y subíndice.

- Las etiquetas que hacen referencia a teclas del teclado.

-> Nota: Las declaraciones las puedes dejar vacías, así: selector { ... }

---

## 📑 EJERCICIO 2: Crea selectores combinadores dentro del elemento style que apunten a:

```
<!DOCTYPE html>
<html>
<head>
<style>
</style>
</head>
<body>
  <hr>
  <h3><u>Tu nombre y apellidos</u></h3>
  <address>
	<b>Población</b>: Tu población.<br>
	<b>Provincia</b>: Tu provincia.<br>
	<b>Dirección</b>: Tu dirección.<br>
	<b>Correo</b>: <u>Tu correo</u><br>
	<b>Teléfono</b>: Tu teléfono.
  </address>
  <hr>
</body>
</html>
```

- Con el selector de hijos: El subrayado del nombre.

- Con el selector de descendiente: Todas las palabras en negrita.

- Con el selector hermanos adyacentes: A la etiqueta address.

- Con el selector general de hermanos: La última etiquetas hr.

-> Nota: Crea todas las combinaciones de selectores posibles, además no puedes utilizar selectores simples.

-> Nota: Las declaraciones las puedes dejar vacías, así: selector { ... }

-> SUGERENCIA: Si aún no te ves capaz, vuelve a ver los vídeos de esta sección que aún no dominas. Intenta no hacer trampas y mirar la solución sin antes haber repasado las lecciones.
