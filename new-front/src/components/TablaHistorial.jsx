import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(codigo, fecha, cantidad, total) {
  return { codigo, fecha, cantidad, total };
}

const rows = [
  createData(12345, "2023-01-01", 10, 1000),
  createData(23456, "2023-01-02", 5, 500),
  createData(34567, "2023-01-03", 8, 800),
  createData(45678, "2023-01-04", 12, 1200),
  createData(56789, "2023-01-05", 15, 1500),
];

function TablaHistorial({ persona }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>{ persona=='cliente' ? 'ID Venta' : 'ID Compra'}</strong></TableCell>
            <TableCell align="center"><strong>Fecha</strong></TableCell>
            <TableCell align="center"><strong>Cantidad</strong></TableCell>
            <TableCell align="center"><strong>Total ($)</strong></TableCell>
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
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.cantidad}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaHistorial;