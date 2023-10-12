# <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> EMMET


`html:5` + `tab`  ó `!` -> para tener la estructura básice de HTML.


---

## <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> OPERADORES DE ANIDAMIENTO

`select>option[value=$]{Día $}*31` -> me crea un select con 31 etiquetas `<option>` las cuales tiene un `value` del 1 al 31 y van a mostrar el texto Dìa 1,..., Dìa 31

- nombre de etiqueta + `tab`

- operador padre - operador hijo (`>`): ``div>p`` ò `p>b+i`

- operador hermano (`+`): `h1+p+p+p`

- para subir un nivel (`^`): `h4+p>b^p>i` -> `<h4></h4><p><b></b></p><p><i></i></p>`. si tengo que subir más de un nivel, uso tantos `^` ocmo niveles debo subir.


---

## <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> AGRUPAR Y MULTIPLICAR

**agrupar** se usa `()`, es un subgrupo en el mismo nivel `(h3)div` -> `<h3></h3><div></div>`

**multiplicar** -> cuantas veces se debe crear ese mismo elemento, usamos `*`, nos sirve para los elementos de lista.


Se pueden combinar ambas y agrupar dentro de otra agrupación.

---

## <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> TEXTO

Usamos las `{}` para introducir texto dentro por ejemplo: `h1{encabezado}` -> `<h1>Encabezado</h1>`.

Es para todas las etiquetas de texto, de h1 al h6, también en p.

Con el signo `$` las enumeramos, empieza desde el 1, como el ejemplo primero del select y los option.

Con `@` va detras del `$` para indicar desde que numero empezara, por ejemplo: `nav>a{enlace-$@5}*2`, son 2 etiquetas y empieza a contar desde la 5. Con `@-` vamos a invertir, para que vaya decresciente la numeración.

---

## <img width="40" height="40" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html 5"/> ATRIBUTOS, ID, CLASES

`.` para clase y `#` para id

Si quiero encadenar más de un nombre de clase, simplemente encadeno los `.`

---
