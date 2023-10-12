# Ejercicios básicos

Crea las siguientes estructuras con código escrito con Emmet:

No importa que aún no conozcas el significado de las etiquetas.

Solo ten en cuenta que para hacer referencia a cada etiqueta debes escribir el nombre de la etiqueta.

Por ejemplo para la etiqueta ``<p>`` de párrafo, solo escribe su nombre p, sin los signos que la contienen.

Lo mismo para cualquier etiqueta que veas.

---

## 📑 EJERCICIO 1:

``

<h1>Emmet</h1>
<p>Codificación de alta velocidad</p>
``

-> `h1{Emmet}+p{Codificaciòn de alta velocidad}`

---

## 📑 EJERCICIO 2:

``
<p><b>Texto en negrita</b></p>
``

-> `p>b{Texto en negrita}`

---

## 📑 EJERCICIO 3: Utiliza el signo * para repetir los párrafos.

``
<div>
  <p>Texto de prueba</p>
  <p>Texto de prueba</p>
  <p>Texto de prueba</p>
</div>
``

-> `div>p{Texto de prueba}*3`

---

## 📑 EJERCICIO 4: Utiliza el signo $ para escribir los números.

``
<p>1 - Elemento numerado</p>
<p>2 - Elemento numerado</p>
<p>3 - Elemento numerado</p>
<p>4 - Elemento numerado</p>
<p>5 - Elemento numerado</p>
``

-> `p{$ - Elemento numerado}*5`

---

## 📑 EJERCICIO 5: Utiliza el signo () para agrupar los párrafos y poder multiplicarlos después. 

``
<p><b>1 </b>- Elemento numerado</p>
<p><b>2 </b>- Elemento numerado</p>
<p><b>3 </b>- Elemento numerado</p>
<p><b>4 </b>- Elemento numerado</p>
<p><b>5 </b>- Elemento numerado</p>
``

-> `(p>b{$ - Elemento numerado})*5`

---

## 📑 EJERCICIO 6: Utiliza el signo $@ para escribir los números desde el número 5. 

``
<p><b>5 </b>- Elemento numerado</p>
<p><b>6 </b>- Elemento numerado</p>
<p><b>7 </b>- Elemento numerado</p>
<p><b>8 </b>- Elemento numerado</p>
<p><b>9 </b>- Elemento numerado</p>
``
-> `(p>b{$@5 - Elemento numerado})*5`
---

## 📑 EJERCICIO 7:

``
<p class="clase-1">Texto con una clase</p>
<p class="clase-2">Texto con una clase</p>
<p class="clase-3">Texto con una clase</p>
``

-> `p.clase-${Texto con una clase}*3`

---

## 📑 EJERCICIO 8:

``
<p class="clase-1" id="id-1">Texto con una clase e id</p>
<p class="clase-2" id="id-2">Texto con una clase e id</p>
<p class="clase-3" id="id-3">Texto con una clase e id</p>
``

-> `p.clase-$#id-${Texto con una clase e id}*3`

---

No te preocupes si aún te cuesta y algún ejercicio no te sale bien, esto es más como otra clase, me doy cuenta que aún desconoces las etiquetas html.

Vuelve aquí su lo crees necesario más adelante en el curso para repasarlo cuando ya conozcas mejor html y sus etiquetas.