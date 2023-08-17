import Navegacion from "../components/Navegacion";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RegistrarMP from "../components/RegistrarMP";
import ListboxProveedor from "../components/ListboxProveedor";
import Modal from "react-overlays/Modal";
import "../Modal.css";
import { useState } from "react";

function Datos() {
    let [dni, setdni] = React.useState("");
    let [nombre, setnombre] = React.useState("");
    let [direccion, setdireccion] = React.useState("");
    let [localidad, setlocalidad] = React.useState("");
    let [provincia, setprovincia] = React.useState("");
    let [telefono, settelefono] = React.useState("");
    let [email, setemail] = React.useState("");

    const handleDniChange = (event) => {
        setdni(event.target.value);
        if (dni == "4482608") {
            setnombre("Tobias Alejandro Maciel Meister");
            setdireccion("Poncho Verde 2345");
            setlocalidad("Corrientes");
            setprovincia("Corrientes");
            settelefono(3794992109);
            setemail("tobiasmaciel@gmail.com");
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ display: "inline", width: "100%", height: "100%" }}>
                <div>
                    <h3 style={{ marginLeft: 5, textAlign: "left" }}>Datos de Ingreso</h3>
                </div>
                <Box
                    sx={{
                        padding: "20px",
                        width: "100%",
                        minheight: "100%",
                    }}
                >
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={5}>
                            <ListboxProveedor />
                        </Grid>
                        <Grid item xs={7}>
                            <TextField
                                fullWidth
                                enable
                                id="descripcion"
                                label="Comentarios (opcional)"
                                value=""
                            />
                        </Grid>

                    </Grid>
                </Box>
            </div>
            <div></div>
        </React.Fragment>
    );
}

function IngresosMP() {

    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    var handleSuccess = () => {
        console.log("success");
    };

    const [showModal2, setShowModal2] = useState(false);

    // Backdrop JSX code
    const renderBackdrop2 = (props) => <div className="backdrop" {...props} />;

    var handleClose2 = () => setShowModal2(false);

    var handleSuccess2 = () => {
        console.log("success");
    };

    return (
        <>
            <div className="Page">
                <div className="ParteSuperior">
                    <div style={{ padding: "0px 0px 20px 20px" }}>
                        <Navegacion />
                    </div>
                    <h1 style={{ margin: "0" }}>INGRESO MATERIA PRIMA</h1>
                </div>
                <div className="Caja">
                    <CssBaseline />
                    <Datos />
                </div>
                <div className="Caja" style={{ margin: "20px" }}>
                    <div className="Tabla">
                        <RegistrarMP />
                    </div>{" "}
                    <div style={{ textAlign: "right", width: "100%" }}>
                        {" "}
                        <button className="Button" onClick={() => setShowModal(true)}>CANCELAR</button>
                        <button className="Button" onClick={() => setShowModal2(true)}>GUARDAR</button>
                        <div>
                            <Modal
                                className="modal"
                                show={showModal}
                                onHide={handleClose}
                                renderBackdrop={renderBackdrop}
                            >
                                <div>
                                    <div className="modal-header">
                                        <div className="modal-title">Cancelar ingreso</div>
                                        <div>
                                            <span className="close-button" onClick={handleClose}>
                                                x
                                            </span>
                                        </div>
                                    </div>
                                    <div className="modal-desc">
                                        <p>¿Esta seguro de realizar dicha acción?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="secondary-button" onClick={handleClose}>
                                            Cancelar
                                        </button>
                                        <button className="primary-button" onClick={handleSuccess}>
                                            Aceptar
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal
                                className="modal"
                                show={showModal2}
                                onHide={handleClose2}
                                renderBackdrop={renderBackdrop2}
                            >
                                <div>
                                    <div className="modal-header">
                                        <div className="modal-title">Confirmar el ingreso</div>
                                        <div>
                                            <span className="close-button" onClick={handleClose2}>
                                                x
                                            </span>
                                        </div>
                                    </div>
                                    <div className="modal-desc">
                                        <p>¿Seguro que desea confirmar?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="secondary-button" onClick={handleClose2}>
                                            Cancelar
                                        </button>
                                        <button className="primary-button" onClick={handleSuccess2}>
                                            Aceptar
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IngresosMP;