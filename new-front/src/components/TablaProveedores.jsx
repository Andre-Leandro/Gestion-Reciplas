import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid, TextField, Button, Checkbox } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../componentsStyles.css";
import { useQuery, useMutation } from "react-query";
import { getAllProveedores } from "../utils/api/proveedores";
import { getAllCompras } from "../utils/api/compras";
import { useState } from "react";

function BuscadorID() {
  return <TextField fullWidth label="Buscar proveedor" />;
}

function createData(id, name, fecha, compras) {
  return {
    id,
    name,
    fecha,
    compras,
    history: [
      {
        fecha: "07/03/2023",
        id: 2345,
        total: 3587,
      },
      {
        fecha: "08/04/2023",
        id: 3452,
        total: 3453,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">
          <Checkbox />
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.nombre}
        </TableCell>
        <TableCell align="center">{row.fechaRegistro}</TableCell>
        <TableCell align="center">{(row.compras).length}</TableCell>
        <TableCell align="center">
          <NavLink to="/detalles-proveedor">
            <button className="Button">Detalle</button>
          </NavLink>
        </TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        {/* Detalle de cada fila */}
                        <Box sx={{ margin: 1 }}>
                            <h3>
                                Compras realizadas al proveedor
                            </h3>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"><strong>Fecha</strong></TableCell>
                                        <TableCell align="center"><strong>ID Compra</strong></TableCell>
                                        <TableCell align="center"><strong>Total ($)</strong></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.compras?.map((compra) => (
                                        <TableRow key={compra.id}>
                                            <TableCell component="th" scope="row" align="center">
                                                {compra.id}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="center">
                                                {compra.fecha}
                                            </TableCell>
                                            <TableCell align="center">
                                                10
                                            </TableCell>
                                            <TableCell align="center">
                                                <NavLink to="/detalle-compra">
                                                    <button className='Button'>
                                                        Detalle
                                                    </button></NavLink>
                                            </TableCell>


                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
    </React.Fragment>
  );
}

/* const rows = [
    createData(123, 'Jorge Gonzalez', '02/05/2023', 99),
    createData(234, 'Sixto Arrejin', '01/06/2023', 91),
    createData(345, 'Tobias Maciel Meister', '17/06/2023', 2),
    createData(456, 'Nilson', '19/06/2023', 99),
    createData(567, 'María García', '05/05/2023', 78),
    createData(678, 'Luisa Fernández', '11/06/2023', 85),
    createData(789, 'Andrés Ramírez', '29/05/2023', 73),
    createData(654, 'Carolina Soto', '07/06/2023', 88),
    createData(264, 'Pedro Martínez', '15/06/2023', 69),
    createData(624, 'Sofía Rodríguez', '20/06/2023', 95)
];
 */
export default function TablaProveedores() {
  const proveedores = useQuery("proveedores", () => getAllProveedores()).data;
  const compras = useQuery("compras", () => getAllCompras()).data;

  // Función para obtener las compras de un proveedor específico
  const obtenerComprasPorProveedor = (proveedorId) => {
    return compras?.filter((compra) => compra.proveedor.id === proveedorId);
  };

  // Crear el array deseado con proveedores y sus compras
  const proveedoresConCompras = proveedores?.map((proveedor) => ({
    ...proveedor,
    compras: obtenerComprasPorProveedor(proveedor.id),
  }));

  console.log(proveedoresConCompras);

  return (
    <Grid style={{ width: "100%", padding: "10px" }}>
      <Grid container direction="row" xs={12}>
        <div style={{ paddingBottom: "30px", marginRight: "5px" }}>
          <BuscadorID />
        </div>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Button color="info" size="small" variant="outlined">
                  Todos
                </Button>
                {/* <button className='Button'>Select all</button>   */}
              </TableCell>
              <TableCell align="center">
                <strong>Nombre</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Fecha Registro</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Compras</strong>
              </TableCell>
              <TableCell align="center">
                <strong> </strong>
              </TableCell>
              <TableCell align="center">
                <strong> </strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proveedoresConCompras?.map((proveedor) => (
              <Row key={proveedor} row={proveedor} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
