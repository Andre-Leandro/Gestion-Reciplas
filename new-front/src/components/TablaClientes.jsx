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

function BuscadorID() {
    return (
        <TextField
            fullWidth
            label="Buscar cliente"
        />
    );
}

function createData(name, tipo, fecha, compras) {
    return {
        name,
        tipo,
        fecha,
        compras,
        history: [
            {
                fecha: "02/05/2023",
                id: 2345,
                total: 3587,
            },
            {
                fecha: "10/06/2023",
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
                <TableCell align="center" >
                    <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {row.tipo}
                </TableCell>
                <TableCell align="center">{row.fecha}</TableCell>
                <TableCell align="center">{row.compras}</TableCell>
                <TableCell align="center">
                    <NavLink to="/detalles-cliente">
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
                        <Box sx={{ margin: 2 }}>
                            
                                <strong> Ventas realizadas al cliente</strong>
             
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"> <strong> Fecha Venta </strong></TableCell>
                                        <TableCell align="center"> <strong> ID</strong></TableCell>
                                        <TableCell align="center"> <strong> Total ($)</strong></TableCell>
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
                                                <NavLink to="/detalle-venta">
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
    createData('Jorge Gonzalez', 'Particular', '02/05/2023', 34),
createData('María Rodríguez', 'Particular', '01/15/2023', 42),
createData('Gigared', 'Empresa', '03/20/2023', 28),
 createData('Ana Martínez', 'Particular', '04/10/2023', 56),
createData('Telecom', 'Empresa ', '05/02/2023', 39),
 createData('Laura Gómez', 'Particular', '06/08/2023', 45),

]

export default function TablaClientes() {
    return (
        <Grid style={{ width: '100%', padding: '10px' }}>
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
                
                            <TableCell align="center"><strong>Nombre</strong></TableCell>
                            <TableCell align="center"><strong>Tipo </strong> </TableCell>
                            <TableCell align="center"><strong>Fecha registro</strong></TableCell>
                            <TableCell align="center"><strong> Cant.ventas</strong></TableCell>
                
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