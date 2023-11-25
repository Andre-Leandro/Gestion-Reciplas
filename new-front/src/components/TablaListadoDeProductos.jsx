import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(codigo, producto, cantidad, precio, total) {
  return { codigo, producto, cantidad, precio, total };
}

const rows = [
  createData(12345, "Mesa Plastica", 10, 200, 2000),
  createData(23456, "Silla Reciclada", 5, 150, 750),
  createData(34567, "Escritorio Ecológico", 8, 300, 2400),
  createData(45678, "Banco de Plástico", 12, 180, 2160),
  createData(56789, "Estante de Reciclaje", 15, 250, 3750),
];

function TablaListadoDeProductos() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Codigo</TableCell>
            <TableCell align="right">Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell align="right">{row.producto}</TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaListadoDeProductos;