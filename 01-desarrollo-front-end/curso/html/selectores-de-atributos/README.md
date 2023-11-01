# Selectores de atributos

Apuntan a cualquier atributo la que le hagamos referencia, usamos el nombre dle atributo entre `[]`, por ejemplo: `[title]`.

También se puede apuntar al valor del atributo, por ejemplo: `[title="Encabezado del artículo"]`

Buscamos un atributo que contenga una palabra especifica sola o separada por un espacio (conla  **virguilla**): `[title~="Encabezado"]`

Buscamos un atributo que comience con un valor determinado (con el **acento circunflejo**) : `[title^="en"]`

Buscamos un atributo por una palabra especifica que termina en un valor (con `$` ), puede ser una palabra completa, o parte: `[href$=".com"]`

Buscamos por una palabra especifica que contiene un valor: `[title*="cabeza"]`

---