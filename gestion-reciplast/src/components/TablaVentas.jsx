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
import Modal from "react-overlays/Modal";
import { useState } from 'react';
import "../Modal.css";

function BuscadorID() {
    return (
        <TextField
            fullWidth
            label="Buscar ID"
        />
    );
}
function BuscadorFI() {
    return (
        <TextField
            fullWidth
            id="date"
            label="Desde..."
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}
function BuscadorFC() {
    return (
        <TextField
            fullWidth
            id="date"
            label="Hasta..."
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}

function createData(descripcion, id, fecha, total, cliente) {
    return {
        descripcion,
        id,
        fecha,
        total,
        cliente,
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

    const [showModal, setShowModal] = useState(false);

    const [showModal1, setShowModal1] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    var handleClose1 = () => setShowModal1(false);

    const handlePrint = () => {
        setShowModal(true);
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="center">
                    <Checkbox />
                </TableCell>
                <TableCell align="center">
                    {row.fecha}
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.cliente}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
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

                            <p><strong>Descripcion:</strong> {row.descripcion}</p>

                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Producto</TableCell>
                                        <TableCell align="center">Descripcion</TableCell>
                                        <TableCell align="center">P/U</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell align="center">Total price ($)</TableCell>

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
                            <Grid container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center">
                                <button
                                    className="Button"
                                    onClick={() => {
                                        setShowModal(true);
                                    }}
                                >
                                    IMPRIMIR
                                </button>
                            </Grid>
                            {/* <div>
                <button type="button" onClick={() => setShowModal(true)}>
                  Open Modal
                </button>
              </div> */}

                            <Modal
                                className="modal"
                                show={showModal}
                                onHide={handleClose}
                                renderBackdrop={renderBackdrop}
                            >
                                <div>
                                    <div className="modal-header">
                                        <div>
                                            <span className="close-button" onClick={handleClose}>
                                                x
                                            </span>
                                        </div>
                                    </div>
                                    <div className="modal-desc">
                                        <p>¿Seguro desea imprimir?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="secondary-button" onClick={handleClose}>
                                            Cancelar
                                        </button>
                                        <button
                                            className="primary-button"
                                            onClick={() => setShowModal1(true)}
                                        >
                                            Aceptar
                                        </button>
                                        <Modal
                                            className="modal"
                                            show={showModal1}
                                            onHide={handleClose}
                                            renderBackdrop={renderBackdrop}
                                        >
                                            <div>
                                                <div className="modal-header">
                                                    <div>
                                                        <span
                                                            className="close-button"
                                                            onClick={() => {
                                                                setShowModal1(false);
                                                                setShowModal(false);
                                                            }}
                                                        >
                                                            x
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="modal-desc">
                                                    <p>Se ha impreso con éxito</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        className="primary-button"
                                                        onClick={() => {
                                                            setShowModal1(false);
                                                            setShowModal(false);
                                                        }}
                                                    >
                                                        Aceptar
                                                    </button>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            </Modal>



                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const rows = [
    createData('Botellas de plástico', 9999, "02/03/2023", 2400, "Sixto Arrejin"),
    createData('Tapas y tapones de plástico', 237, "15/03/2023", 37, "Gonzalo"),
    createData('Bolsas de plástico personalizadas', 3465, "15/03/2023", 37, "San Lorenzo"),
    createData('Productos plásticos especializados', 235677, "15/03/2023", 37, "Maciel Meister Tobias"),
    createData('Bolsas de plástico standar', 6587, "15/03/2023", 37, "Nilson"),
    createData('Tapas y tapones de plástico', 95238, "15/03/2023", 37, "Hilel"),
];

export default function TablaVentas() {
    return (
        <Grid>
            <Grid container direction="row" xs={12}>
                <div style={{ paddingBottom: '50px', marginRight: "5px" }}>
                    <BuscadorID />
                </div>
                <div style={{ paddingBottom: '50px', marginRight: "5px" }}>
                    <BuscadorFI />
                </div>
                <div style={{ paddingBottom: '50px' }}>
                    <BuscadorFC />
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
                            <TableCell align="center"><Typography variant="h6" color="initial">Fecha</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">ID</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6" color="initial">Cliente</Typography></TableCell>
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