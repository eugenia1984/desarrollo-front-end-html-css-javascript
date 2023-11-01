# Tablas

Todas contienen como mínimo:

- `<table>` -> etiqueta para la tabla (table)

- `<tr>` -> table row, par ala fila

- `<td>` -> table data, para la celda

También tenemos:

`<th>`, table header, pueden ser cabeceras tanto horizontal como vertical

`<caption>`, un titulo general arriba de la tabla

`<colgroup>`, para hacer un grupo de celdas y dentro podemos tener ``<col>`` con el atributo `span` par aunir mas de una celda

- Se le puede personalizar le **borde**:

```CSS
table, td {
  border: 1px solid block;
  border-collapse: collapse; /* Para que no me quede como dos rayas*/
}
```

En la `td` le puedo aplicar: `border-style`: `dashed | none `

---
