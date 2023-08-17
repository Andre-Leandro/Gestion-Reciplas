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
import { NavLink } from 'react-router-dom';
import "../componentsStyles.css";

function BuscadorID() {
    return (
        <TextField
            fullWidth
            label="Buscar ID"
        />
    );
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
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="center">
                    <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.fecha}</TableCell>
                <TableCell align="center">{row.compras}</TableCell>
                <TableCell align="center">
                    <NavLink to="/detalles-proveedor">
                        <button className='Button'>
                            Detalle
                        </button></NavLink>
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
                            <Typography variant="h6" gutterBottom component="div">
                                Compras realizadas al proveedor
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Fecha</TableCell>
                                        <TableCell align="center">Id</TableCell>
                                        <TableCell align="center">Total ($)</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.id}>
                                            <TableCell component="th" scope="row" align="center">
                                                {historyRow.fecha}
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="center">
                                                {historyRow.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                {historyRow.total}
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


const rows = [
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

export default function TablaProveedores() {
    return (
        <Grid>
            <Grid container direction="row" xs={12}>
                <div style={{ paddingBottom: '30px', marginRight: "5px" }}>
                    <BuscadorID />
                </div>
            </Grid>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <Button color="info" size="small" variant="outlined">Todos</Button>
                                {/* <button className='Button'>Select all</button>   */}
                            </TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">ID</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">Nombre</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">Fecha Registro</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">Compras</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial"> </Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial"> </Typography></TableCell>
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