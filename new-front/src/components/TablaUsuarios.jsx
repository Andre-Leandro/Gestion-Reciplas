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

function createData(id, name, area) {
    return {
        id,
        name,
        area,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.area}</TableCell>
                <TableCell align="center">
                    <NavLink to="/detalle-usuario">
                        <button  className='Button'>
                            Detalle
                        </button></NavLink>
                </TableCell>


            </TableRow>
            
        </React.Fragment>
    );
}


const rows = [
    createData(123, 'Jorge Gonzalez', "Producción"),
    createData(234, 'Hector Lopez', "Ventas"),
    createData(345, 'Sixto Arrejin', "Compras"),
    createData(456, 'Tobias Suarez', "Administración"),
    createData(567, 'Lusi Perez', "Administración"),
    createData(678, 'Nilson Orrego', "Ventas"),
];

export default function TablaUsuarios() {
    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center"><strong>ID</strong></TableCell>
                        <TableCell align="center"><strong>Nombre</strong></TableCell>
                        <TableCell align="center"><strong>Área</strong></TableCell>
                        <TableCell align="center"></TableCell>

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