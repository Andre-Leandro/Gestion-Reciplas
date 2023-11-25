import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, TextField, Button, Checkbox } from '@mui/material';

function createData(name, id, fecha, total) {
  return {
    name,
    id,
    fecha,
    total,
    history: [
      {
        name: 'Botella',
        pu: 35,
        cantidad: 3,
        descripcion: "Buen producto"
      },
      {
        name: 'Bolsas',
        pu: 5,
        cantidad: 1,
        descripcion: "Buenisimo"
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{row.fecha}</TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
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
              
                <h2>Detalle de venta</h2>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Producto</TableCell>
                    <TableCell align="center">Descripcion</TableCell>
                    <TableCell align="center">P/U</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Total ($)</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.descripcion}
                      </TableCell>
                      <TableCell align="center">{historyRow.pu}</TableCell>
                      <TableCell align="center">{historyRow.cantidad}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.cantidad * historyRow.pu * 100) / 100}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <br />

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  createData('Jorge Ramirez', 9999, "02/03/2023", 2400),
  createData('Arrejin Sixto', 237, "15/03/2023", 37),
  createData('Maciel Meister', 123, "10/05/2023", 1500),
  createData('San Lorenzo André', 456, "22/06/2023", 3000),
  createData('Gonzalez', 789, "05/09/2023", 800),
  // Agrega más datos aquí si lo deseas
];

export default function TablaDeudores() {
  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6" color="initial">Fecha</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Cliente</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Venta ID</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Total</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6" color="initial">Detalles</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}