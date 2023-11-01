# Ejercicios de enlaces

- Se utilizala etiqueta **anchor**: `<a></a>`

- Atributo **href** para indicar hacia donde va el link

- Atributo **Target** con valor `_blank` abre el enlace en nueva pestaña, por defecto es `_self`, la misma pestaña

- Si el eenlace es para moverse dentro de la misma pagina el href comienza con `#` y va a corresponder a la etqieueta con el `id` indicado a la que nos queremos mover

- Pseudoclases de links:

```CSS
a { 
  text-decoration: none; 
  padding: 10px; 
  color: white; 
  }
a:link {  /* Estilo a los enlaces que aun no fueron visitados */
  background-color: dodgerblue; 
  }
a:visited {  /* Estilos a los links visitados */
  background-color: black; 
  }
a:active { 
  background-color: darkred; 
  }
a:hover { /* encima dle enlace con el mouse */
  background-color: orange; 
  }

/* Para por ejemplo marcar como la opcion activa en un navbar */
#cap-9:target,
#cap-15:target { 
  background-color: dodgerblue; 
}

#indice:target { 
  background-color: orange; 
}
```

- Icono de favorito o **favicon**:

```
<link rel="icon" type="image/x-icon" href="../../imagenes/favicon.ico">
```

En el **type** indicamos el tipo de imagen, tamaño 16x16 o 32x32. Tenemos la web **Favicon.io** que nos transforma una imagen en favicon

---