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
  createData("Silla plástica pequeña", 159, 10.0, 24, 4.0),
  createData("Bolsas de consorcio", 237, 4.0, 37, 4.3),
  createData("Banco plastico de alta densidad", 262, 5.0, 24, 6.0),
  createData("Reposera", 305, 3.0, 67, 4.3),
  createData("Vasos medianos x25", 356, 5.0, 49, 3.9),
];

function TablaDetalle() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><strong>Producto</strong></TableCell>
            <TableCell align="center"><strong>ID Producto</strong></TableCell>
            <TableCell align="center"><strong>Cantidad</strong></TableCell>
            <TableCell align="center"><strong>Precio ($)</strong></TableCell>
            <TableCell align="center"><strong>Total</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell align="center">{row.producto}</TableCell>
              <TableCell align="center">{row.cantidad}</TableCell>
              <TableCell align="center">{row.precio}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaDetalle;