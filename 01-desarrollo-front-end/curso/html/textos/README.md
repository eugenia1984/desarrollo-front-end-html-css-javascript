# TEXTOS

- **pseudo elementos** se indican con : `::`, y pueden ser ...

... pseudo elemento seleccion: `h1::selection { color: red; } `, la seleccionar el `h1` se va a resaltar de rojo

... pseudo elemento primera letra `::first-letter` (para agregar estilos a la primer letra) o linea `::first-line`

...`::after` y `::before` para agregar contenido tanto después o antes del contenido, en la propiedad `content` indicamso que se agrega

- **text-transform**: `capitalize | lower-case | upper-case`

- **text-decoration**: line: `underline | overline | line-through`, style: `dashed | dotted | wavy | solid` y con color le damos el color. También se puede dar pixeles para indicar el ancho

- **Espaciado del texto**: `text-indent` para la sangria en el primer parrafo, `letter-spacing` para el espacio entre letras, `line-height` para el espacio entre lineas(renglones), `word-spacing` para el espacio entre letras y también tenemos: `white-space: nowrap | pre | pre-wrap | pre-line;`

- **alineación de texto**: `text-align: left | right | center | justify;` esos mismos valores se pueden alicar para `text-align-last` asi alineamos la última línea dle texto

- **modo de escritura**: `writing-mode: horizontal-tb | vertical-rl | vertical-lr | upright;`